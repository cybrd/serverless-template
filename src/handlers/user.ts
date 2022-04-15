import { Handler } from "aws-lambda";
import { findByUser, findByEmail } from "../services/user";

export const findByUserHandler: Handler = async (event) => {
  if (event.body) {
    const body = JSON.parse(event.body);

    if (body.id) {
      const results = await findByUser(body.id);

      return { results };
    } else {
      return {};
    }
  } else {
    return {};
  }
};

export const findByEmailHandler: Handler = async (event) => {
  if (event.body) {
    const body = JSON.parse(event.body);

    if (body.id) {
      const results = await findByEmail(body.id);

      return { results };
    } else {
      return {};
    }
  } else {
    return {};
  }
};
