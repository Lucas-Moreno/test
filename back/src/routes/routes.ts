import { Express } from "express";

import { getTest } from "../controllers/users.controller";

export default function (app: Express) {
  app.get("/hello", getTest);
}