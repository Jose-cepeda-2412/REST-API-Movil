import { Router } from "express";
import { getAllUsers, getUserById } from "../controller/user.controller.js";

const router = Router();

//buscar por id del usuario
//localhost:3000/users/:id
router.get("/users/:id", getUserById);

router.get("/users/", getAllUsers);
export default router;
