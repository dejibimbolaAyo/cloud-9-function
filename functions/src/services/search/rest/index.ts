import * as functions from "firebase-functions";
import * as Express from "express";
import * as cors from "cors";

import { searchVariant } from "./handlers";

const app = Express();
app.use(cors());

app.get("/", searchVariant);

app.use(
  (
    error: any,
    request: Express.Request,
    response: Express.Response,
    next: Express.NextFunction
  ) => {
    if (error.name === "UnauthorizedError") {
      if (request.cookies) {
        response.clearCookie("idToken");
      }

      response.status(401).send("Unauthorized");
    }
  }
);

export const variantSearch = functions.https.onRequest(app);
