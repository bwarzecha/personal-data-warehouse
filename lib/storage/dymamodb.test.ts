import { launch, stopChild } from "dynamodb-local";
import AWS from "aws-sdk";
import { CreateTableInput, GetItemInput } from "aws-sdk/clients/dynamodb";
jest.setTimeout(15000);
const DYNAMO_LOCAL_PORT = 8000;
let dynamo: any;
// beforeAll(async () => {
//   dynamo = await launch(DYNAMO_LOCAL_PORT, null, [], false, true);
//   console.log(`Dynamo started. PID: ${dynamo.pid}`);
// });

test("Just playing around", async () => {
  AWS.config.update({
    region: "eu-west-1",
    endpoint: `http://localhost:${DYNAMO_LOCAL_PORT}`,
  });

  //   var dynamodb = new AWS.DynamoDB();

  //   var params: CreateTableInput = {
  //     TableName: "Movies",
  //     KeySchema: [
  //       { AttributeName: "year", KeyType: "HASH" }, //Partition key
  //       { AttributeName: "title", KeyType: "RANGE" }, //Sort key
  //     ],
  //     AttributeDefinitions: [
  //       { AttributeName: "year", AttributeType: "N" },
  //       { AttributeName: "title", AttributeType: "S" },
  //     ],
  //     ProvisionedThroughput: {
  //       ReadCapacityUnits: 10,
  //       WriteCapacityUnits: 10,
  //     },
  //   };

  //   const response = await dynamodb.createTable(params).promise();
  //   console.log(JSON.stringify(response, null, 2));

  var docClient = new AWS.DynamoDB.DocumentClient();
  let document = {
    TableName: "Movies",
    Item: {
      year: 2021,
      title: "The Story of My life",
      info: {
        randomFact1: 12,
        randomFact2: "String",
      },
    },
  };
  await docClient.put(document).promise();

  var fetchIds: GetItemInput = {
    TableName: "Movies",
    Key: {
      year: 2021,
      title: "The Story of My life",
    },
    ConsistentRead: true,
  };
  const actual = await docClient.get(fetchIds).promise();
  console.log(JSON.stringify(actual, null, 2));
});

// afterAll(async () => {
//   console.log(`Stopping dynamo. PID: ${dynamo.pid}`);

//   await stopChild(dynamo);
// });
