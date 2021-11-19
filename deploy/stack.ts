import { NextJSLambdaEdge } from "@sls-next/cdk-construct";
import * as cdk from "@aws-cdk/core";

export class NextStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    new NextJSLambdaEdge(this, "PersonalDataWarehouse", {
      serverlessBuildOutDir: "./build",
    });
  }
}
