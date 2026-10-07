import { Router } from "express";
import {
  deleteReviewById,
  updateReviewById,
  getReviewsByUserId,
  getReviewsByVideoGameId,
  createReview,
} from "../controller/review.controller.js";

const router = Router();

//CRUD para reseñas

//Tener la consulta que permite crear un review, dado un id de usuario, id de videojuego, y la información de un review
// localhost:3000/reviews/user/:userId/video-game/:videoGameId
router.post(
  "/reviews/user/:userId/video-game/:videoGameId",
  createReview,
);

//Tener la consulta que permite traer todos los review de un videojuego, de acuerdo a su id.
//localhost:3000/reviews/video-game/:id
router.get("/reviews/video-game/:id", getReviewsByVideoGameId);
//Tener una consulta que permita traer todos los reviews dado un id de usuario.
//localhost:3000/reviews/user/:id
router.get("/reviews/user/:id", getReviewsByUserId);

//Tener la consulta que permite eliminar un review por su id.
//localhost:3000/reviews/:id
router.delete("/reviews/:id", deleteReviewById);

//Tener la consulta que permite modificar la información de un review dado su id.
//localhost:3000/reviews/:id
router.put("/reviews/:id", updateReviewById);
export default router;
