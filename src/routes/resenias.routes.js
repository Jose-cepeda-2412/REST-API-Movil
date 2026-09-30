import { Router } from "express";
import { eliminarReviewId } from "../controller/resenia.controller.js";

const router = Router();

//CRUD para reseñas

//Tener la consulta que permite crear un review, dado un id de usuario, id de artículo, y la información de un review

//Tener la consulta que permite traer todos los review de un artículo, de acuerdo a su id.

//Tener una consulta que permita traer todos los revies dado un id de usuario.

//Tener la consulta que permite eliminar un review por su id.
//localhost:3000/resenia/:id
router.delete("/resenia/:id", eliminarReviewId);
//Tener la consulta que permite modificar la información de un review dado su id.

export default router;
