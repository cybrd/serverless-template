import { docClient } from "../config";
import * as AWS from "aws-sdk";

export const scan = async (body: string) => {
  let key: any = undefined;
  if (body) {
    key = {
      id: body,
    };
  }

  try {
    const params: AWS.DynamoDB.DocumentClient.ScanInput = {
      TableName: "serverless-example-template",
      ExclusiveStartKey: key,
      Limit: 1000,
    };

    return docClient.scan(params).promise();
  } catch (err) {
    console.error(err);
  }
};
