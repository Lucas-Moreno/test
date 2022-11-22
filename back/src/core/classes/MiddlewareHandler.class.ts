import {MiddlewareObject} from "~/core/types/MiddlewareObject.type";
import {Middleware} from "~/core/types/Middleware.type";

export class MiddlewareHandler {

    public static middlewareList:Array<MiddlewareObject> = []

    public static addMiddleware(middleware:Middleware, basePath:string){
        const routerObject:MiddlewareObject = {
            middleware,
            basePath
        }
        this.middlewareList.push(routerObject)
    }
}