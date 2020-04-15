import { Request, Response } from "express";
import { altasSearch } from "./../search";

export const searchVariant = (request: Request, response: Response) => {
  const params = request.params;
  let query = request.query.term;
  let limit = request.query.limit;

  // call search service
  altasSearch(query, limit);

  console.log("Search all variants", params);
};
