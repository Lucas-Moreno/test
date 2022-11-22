import {MiddlewareHandler} from "~/core/classes/MiddlewareHandler.class";
import testMiddleware from "~/middleware/test.middleware";

MiddlewareHandler.addMiddleware(testMiddleware, "/")

export default MiddlewareHandler.middlewareList