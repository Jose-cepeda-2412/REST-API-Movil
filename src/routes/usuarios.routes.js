import { Router } from "express";
import { getUsuarioId } from "../controller/usuario.controller.js";

const router = Router();

//buscar por id del usuario
//localhost:3000/usuarios/:id
router.get("/usuarios/:id", getUsuarioId);

export default router;
