import { Request, Response } from "express";

export const getVariant = (request: Request, response: Response) => {
  const params = request.params;
  console.log("Get variant", params);
};

export const fetchAllVariantInHexCode = (
  request: Request,
  response: Response
) => {
  const params = request.params;
  console.log("Get variants in hexCode", params);
};
