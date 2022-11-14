import { Request, Response } from "express";

export async function getTest(req: Request, res: Response) {
  return res.send(200);
}