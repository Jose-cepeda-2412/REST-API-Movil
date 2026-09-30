import { Router } from "express";
import {
  eliminarReviewId,
  modificarReview,
  getReviewsUserId,
  getReviewsVideoJuegosId,
  postCrearResenia,
} from "../controller/resenia.controller.js";

const router = Router();

//CRUD para reseñas

//Tener la consulta que permite crear un review, dado un id de usuario, id de videojuego, y la información de un review
// localhost:3000/resenia/usuario/:idUsuario/videoJuego/:idVideojuego
router.post(
  "/resenia/usuario/:idUsuario/videoJuego/:idVideoJuego",
  postCrearResenia,
);

//Tener la consulta que permite traer todos los review de un videojuego, de acuerdo a su id.
//localhost:3000/resenia/videoJuego/:id
router.get("/resenia/videoJuego/:id", getReviewsVideoJuegosId);
//Tener una consulta que permita traer todos los reviews dado un id de usuario.
//localhost:3000/resenia/usuario/:id
router.get("/resenia/usuario/:id", getReviewsUserId);

//Tener la consulta que permite eliminar un review por su id.
//localhost:3000/resenia/:id
router.delete("/resenia/:id", eliminarReviewId);

//Tener la consulta que permite modificar la información de un review dado su id.
//localhost:3000/resenia/:id
router.put("/resenia/:id", modificarReview);
export default router;
