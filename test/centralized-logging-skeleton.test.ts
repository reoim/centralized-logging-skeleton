import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CentralizedLoggingSkeleton from '../lib/centralized-logging-skeleton-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CentralizedLoggingSkeleton.CentralizedLoggingSkeletonStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
