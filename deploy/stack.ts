import { NextJSLambdaEdge } from "@sls-next/cdk-construct";
import * as cdk from "@aws-cdk/core";

export class NextStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    const lambda = new NextJSLambdaEdge(this, "PersonalDataWarehouse", {
      serverlessBuildOutDir: "./build",
    });

    new cdk.CfnOutput(this, "website", {
      value: `https://${lambda.distribution.domainName}`,
      description: "Domain Name of the stack",
    });
  }
}
