import { Router } from "express";
import {
  getVideoGames,
  getVideoGameById,
} from "../controller/videoGame.controller.js";

const router = Router();

//consulta que trae todos los videoJuegs
//get   localhost:3000/video-games
router.get("/video-games", getVideoGames);

//consulta que permite traer el detalle de un videoJuego por id del videoJuego
//get   localhost:3000/video-games/:id
router.get("/video-games/:id", getVideoGameById);

export default router;
