import { QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../config";

export const findByUser = async (id: string) => {
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

export const findByEmail = async (id: string) => {
  let key = {
    email: { S: id },
  };

  try {
    const command = new ScanCommand({
      TableName: "serverless-template-dynamodb",
      FilterExpression: "#user = :user",
      ExpressionAttributeValues: {
        ":user": key.email,
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
