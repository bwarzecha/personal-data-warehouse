localDynamo = require("local-dynamo");
localDynamo.launch({
  port: 4567,
  sharedDb: true,
  heap: "512m",
});
