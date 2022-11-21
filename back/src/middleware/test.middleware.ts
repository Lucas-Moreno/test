import {NextFunction, Request, Response} from "express";
import logger from "~/logger/logger";

export default function testMiddleware(req:Request, res:Response, next:NextFunction) {
    logger.debug("Test middleware OK")
}
