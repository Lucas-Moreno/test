import {ControllerHandler} from "~/core/classes/ControllerHandler.class";
import TestRoutes from "~/controllers/test.controller";

ControllerHandler.addController(TestRoutes, "/")

export default ControllerHandler.controllerList