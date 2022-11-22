import {Middleware} from "~/core/types/Middleware.type";

export type MiddlewareObject = {
    middleware: Middleware,
    basePath: string
}