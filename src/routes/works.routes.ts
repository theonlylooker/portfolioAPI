import { Router } from "express";
import {createWork,getWorks,updateWork,deleteWork} from "../controllers/work.controller"
import AuthenticationMiddleware from "../middleware/authentication.middleware"

const workRoutes = Router();

workRoutes.get("/",getWorks)

workRoutes.post("/",AuthenticationMiddleware,createWork)

workRoutes.patch("/:id",AuthenticationMiddleware,updateWork);

workRoutes.delete("/:id",AuthenticationMiddleware,deleteWork)
export default workRoutes