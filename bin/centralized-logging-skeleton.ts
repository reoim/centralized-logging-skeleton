#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LogBucketStack } from '../lib/log-bucket-stack';

const envRegion = { region: 'us-east-2' };
const app = new cdk.App();

new LogBucketStack(app, 'LogBucketStack', { env: envRegion });

