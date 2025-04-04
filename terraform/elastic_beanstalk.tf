
locals {
  main_app_elastic_beanstalk_solution_stack_name = "64bit Amazon Linux 2023 v6.4.1 running Node.js 20"
  main_app_elastic_beanstalk_ec2_instance_type = "t4g.nano"
  main_app_elastic_beanstalk_root_volume_size = 8  // Disk space (in GB) to give each EC2 instance

  main_app_elastic_beanstalk_min_instances = 1
  main_app_elastic_beanstalk_max_instances = 2

  main_app_elastic_beanstalk_health_check_path = "/"  // It would be nice if this was a dedicated "/health-check" endpoint that's unauthenticated
  main_app_elastic_beanstalk_health_check_matcher_http_code = "200,302"  // Normally this would be 200, but because the health checker won't be logged in, the prototype will respond with a 302 to the login screen
}


// An S3 bucket to store the code that is deployed by Elastic Beanstalk
resource "aws_s3_bucket" "main_app_elastic_beanstalk_code_s3_bucket" {
  bucket_prefix = lower("${var.service_name_hyphens}--${var.environment_hyphens}--S3-Beanstalk-")
}

resource "aws_s3_bucket_public_access_block" "main_app_elastic_beanstalk_code_s3_bucket_public_access_block" {
  bucket = aws_s3_bucket.main_app_elastic_beanstalk_code_s3_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}


resource "aws_elastic_beanstalk_application" "main_app_elastic_beanstalk_application" {
  name        = "${var.service_name}__${var.environment}__Elastic_Beanstalk_Application"
}


data "aws_iam_instance_profile" "elastic_beanstalk" {
  name = "aws-elasticbeanstalk-ec2-role"
}


resource "aws_elastic_beanstalk_environment" "main_app_elastic_beanstalk_environment" {
  name                = "${var.service_name_hyphens}--${var.environment_hyphens}--EB-Env"
  application         = aws_elastic_beanstalk_application.main_app_elastic_beanstalk_application.name

  tier                = "WebServer"
  solution_stack_name = local.main_app_elastic_beanstalk_solution_stack_name
  cname_prefix        = "${var.service_name_hyphens}--${var.environment_hyphens}"


  // See this documentation for all the available settings
  // https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html

  ///////////////
  // VPC
  setting {
    namespace = "aws:ec2:vpc"
    name      = "VPCId"
    value     = aws_vpc.vpc_main.id
  }
  setting {
    namespace = "aws:ec2:vpc"
    name      = "Subnets"
    value     = join(",", [aws_subnet.vpc_main__public_subnet_az1.id, aws_subnet.vpc_main__public_subnet_az2.id])
  }
  setting {
    namespace = "aws:ec2:vpc"
    name      = "ELBSubnets"
    value     = join(",", [aws_subnet.vpc_main__public_subnet_az1.id, aws_subnet.vpc_main__public_subnet_az2.id])
  }
  setting {
    namespace = "aws:ec2:vpc"
    name      = "ELBScheme"
    value     = "public"
  }
  setting {
    namespace = "aws:ec2:vpc"
    name      = "AssociatePublicIpAddress"
    value     = true
  }


  /////////////////////
  // Instances
  setting {
    namespace = "aws:ec2:instances"
    name      = "InstanceTypes"
    value     = local.main_app_elastic_beanstalk_ec2_instance_type
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = data.aws_iam_instance_profile.elastic_beanstalk.name
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "SecurityGroups"
    value     = aws_security_group.security_group_main_app_instances.id
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "RootVolumeType"
    value     = "gp3"
  }
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "RootVolumeSize"
    value     = local.main_app_elastic_beanstalk_root_volume_size
  }


  /////////////////////////
  // Load Balancer
  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerType"
    value     = "application"
  }
  setting {
    namespace = "aws:elbv2:loadbalancer"
    name      = "SecurityGroups"
    value     = aws_security_group.security_group_main_app_load_balancer.id
  }
  setting {
    namespace = "aws:elbv2:loadbalancer"
    name      = "ManagedSecurityGroup"
    value     = aws_security_group.security_group_main_app_load_balancer.id
  }


  //////////////////////////////////
  // Load Balancer Listener
  setting {
    namespace = "aws:elbv2:listener:default"
    name      = "ListenerEnabled"
    value     = "true"  // was false // disabled. we create our own port 80 listener which redirects to https
  }

  // HTTPS secure listener config
  //  setting {
  //    namespace = "aws:elbv2:listener:443"
  //    name      = "ListenerEnabled"
  //    value     = "true"
  //  }
  //
  //  setting {
  //    namespace = "aws:elbv2:listener:443"
  //    name      = "Protocol"
  //    value     = "HTTPS"
  //  }
  //
  //  setting {
  //    namespace = "aws:elbv2:listener:443"
  //    name      = "SSLCertificateArns"
  //    value     = var.ELB_LOAD_BALANCER_SSL_CERTIFICATE_ARN
  //  }
  //
  //  setting {
  //    namespace = "aws:elbv2:listener:default"
  //    name = "SSLPolicy"
  //    value = "ELBSecurityPolicy-2016-08"
  //  }
  //


  ////////////////////////
  // Auto-scaling
  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MinSize"
    value     = local.main_app_elastic_beanstalk_min_instances
  }
  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MaxSize"
    value     = local.main_app_elastic_beanstalk_max_instances
  }


  /////////////////////////////////
  // Auto-scaling Triggers
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "MeasureName"
    value     = "CPUUtilization"
  }
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "Statistic"
    value     = "Average"
  }
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "Unit"
    value     = "Percent"
  }
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "Period"
    value     = 1  // Time (in minutes) between checks
                   // Note: remember to update the other settings
  }                // BreachDuration = Period * EvaluationPeriods
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "EvaluationPeriods"
    value     = 3  // Number of consecutive checks that must be too high/low to trigger a scaling action
                   // Note: remember to update the other settings
  }                // BreachDuration = Period * EvaluationPeriods
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "BreachDuration"
    value     = 3  // How long (in minutes) must the checks be toon high/low before scaling up/down
                   // Note: remember to update the other settings
  }                // BreachDuration = Period * EvaluationPeriods
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "UpperThreshold"
    value     = 80  // If the CPU % stays above this level, we scale up
  }
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "UpperBreachScaleIncrement"
    value     = 1  // How many instances to add when we scale up
  }
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "LowerThreshold"
    value     = 50  // If the CPU % stays below this level, we scale down
  }
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "LowerBreachScaleIncrement"
    value     = -1  // How many instances to ADD when we scale down
  }                 // (this needs to be a negative number so we scale down!)


  ///////////////////////
  // Deployments
  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "DeploymentPolicy"
    value     = "Rolling"
  }
  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "BatchSizeType"
    value     = "Fixed"
  }
  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "BatchSize"
    value     = 1
  }


  //////////////////////////////////////////////
  // Rolling Updates (to configuration)
  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "RollingUpdateEnabled"
    value     = true
  }
  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "RollingUpdateType"
    value     = "Health"
  }
  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "MaxBatchSize"
    value     = 1
  }
  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "MinInstancesInService"
    value     = 1
  }
  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "PauseTime"  // How long should we pause between finishing updating one batch and starting updating the next batch
    value     = "PT0S"  // PT0S means "0 seconds" https://en.wikipedia.org/wiki/ISO_8601#Durations
  }


  ///////////////////////////
  // Sticky Sessions
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "StickinessEnabled"
    value     = false
  }


  /////////////////////////
  // Health Checks
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthCheckPath"
    value     = local.main_app_elastic_beanstalk_health_check_path
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthCheckInterval"
    value     = 15
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthCheckTimeout"
    value     = 5
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "MatcherHTTPCode"
    value     = local.main_app_elastic_beanstalk_health_check_matcher_http_code
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "DeregistrationDelay"
    value     = 20
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthyThresholdCount"
    value     = 3
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "UnhealthyThresholdCount"
    value     = 5
  }


  //////////////////////
  // CloudWatch
  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs"
    name      = "RetentionInDays"
    value     = 30
  }
  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs"
    name      = "StreamLogs"
    value     = true
  }
  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs"
    name      = "DeleteOnTerminate"
    value     = false
  }

  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs:health"
    name      = "RetentionInDays"
    value     = 30
  }
  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs:health"
    name      = "HealthStreamingEnabled"
    value     = true
  }
  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs:health"
    name      = "DeleteOnTerminate"
    value     = false
  }


  /////////////////////////////////
  // Environment variables
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "USE_HTTPS"
    value     = "false"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "NODE_ENV"
    value     = "production"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "PASSWORD"
    value     = var.APP_PASSWORD
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "PASSWORD_KEYS"
    value     = "USER_TESTING_PASSWORD"
  }
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "USER_TESTING_PASSWORD"
    value     = var.USER_TESTING_PASSWORD
  }

}
