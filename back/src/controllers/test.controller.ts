//Import du service
import {getTest} from "~/services/test.service";
//Import du router
import {Router} from "express";

const router = Router()

router.get("/", getTest)

export default router