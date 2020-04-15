import * as functions from "firebase-functions";
import * as Express from "express";
import * as cors from "cors";

import { getVariant, fetchAllVariantInHexCode } from "./handlers";

const app = Express();
app.use(cors());

app.get("/:plusCode/:id", getVariant);
app.get("/:plusCode", fetchAllVariantInHexCode);

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

export const variantFetch = functions.https.onRequest(app);
