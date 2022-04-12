import { Handler } from "aws-lambda";

import { scan as scanService } from "./services/scan";

export const scan: Handler = async (event) => {
  const results = await scanService(
    event.pathParameters ? event.pathParameters.id : ""
  );

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(results),
  };
};
