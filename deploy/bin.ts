import * as cdk from "@aws-cdk/core";
import { Builder } from "@sls-next/lambda-at-edge";
import { NextStack } from "./stack";

// Run the serverless builder, this could be done elsewhere in your workflow
const builder = new Builder(".", "./build", { args: ["build"] });

builder
  .build()
  .then(() => {
    const app = new cdk.App();
    new NextStack(app, `Website`, {
      env: {
        region: "us-east-1",
      },
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
