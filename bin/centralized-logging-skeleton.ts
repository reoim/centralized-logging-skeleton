#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CentralizedLoggingSkeletonStack } from '../lib/centralized-logging-skeleton-stack';

const app = new cdk.App();
new CentralizedLoggingSkeletonStack(app, 'CentralizedLoggingSkeletonStack');
