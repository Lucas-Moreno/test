//Import des types request et response d'express
import {Request, Response} from "express";

export async function getTest(req:Request, res:Response) {
    res.json("test");
}