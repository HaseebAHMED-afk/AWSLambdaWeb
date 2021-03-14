#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsLambdaWebStack } from '../lib/aws-lambda-web-stack';

const app = new cdk.App();
new AwsLambdaWebStack(app, 'AwsLambdaWebStack');
