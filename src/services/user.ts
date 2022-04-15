import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../config";

export const get = async (id: string) => {
  let key = {
    user: { S: id },
  };

  try {
    const command = new QueryCommand({
      TableName: "serverless-template-dynamodb",
      KeyConditionExpression: "#user = :user",
      ExpressionAttributeValues: {
        ":user": key.user,
      },
      ExpressionAttributeNames: { "#user": "user" },
      Limit: 1000,
    });

    return ddbClient.send(command);
  } catch (err) {
    console.error(err);
    return err;
  }
};
