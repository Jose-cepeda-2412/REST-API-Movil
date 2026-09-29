import { Router } from "express";
import {
  getVideoJuegos,
  getVideoJuegosId,
} from "../controller/videoJuegos.controller.js";

const router = Router();

//consulta que trae todos los videoJuegs
//get   localhost:3000/videoJuegos
router.get("/videoJuegos", getVideoJuegos);

//consulta que permite traer el detalle de un videoJuego por id del videoJuego
//get   localhost:3000/videoJuegos/:id
router.get("/videoJuegos/:id", getVideoJuegosId);

export default router;
