import {RouterObject} from "~/core/types/RouterObject.type";
import express from "express"

export class ControllerHandler {

    public static controllerList:Array<RouterObject> = []

    public static addController(router:express.Router, basePath:string){
        const routerObject:RouterObject = {
            router,
            basePath
        }
        this.controllerList.push(routerObject)
    }
}