import { Handler } from "aws-lambda";
import { get as getUser } from "../services/user";

export const get: Handler = async (event) => {
  if (event.body) {
    const body = JSON.parse(event.body);

    if (body.id) {
      const results = await getUser(body.id);

      return results;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
