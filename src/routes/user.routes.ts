import { Router } from "express";
import {loginUser} from "../controllers/user.controller"
const userRoutes = Router();

userRoutes.post("/login",loginUser);

export default userRoutes;