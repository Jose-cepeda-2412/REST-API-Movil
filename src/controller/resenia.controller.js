import { Resenia } from "../models/Resenia.js";
import { Usuario } from "../models/Usuario.js";
import { VideoJuego } from "../models/VideoJuego.js";
//crear reseña con id de usuario, videojuego e información de la reseña
export const postCrearResenia = async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;
    const idVideoJuego = req.params.idVideoJuego;

    const usuario = await Usuario.findByPk(idUsuario);
    const videoJuego = await VideoJuego.findByPk(idVideoJuego);

    if (!usuario) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }

    if (!videoJuego) {
      return res.status(404).json({ error: "videoJuego no encontrado" });
    }

    const newResenia = await Resenia.create({
      calificacion: req.body.calificacion,
      fechaResenia: req.body.fechaResenia,
      contenido: req.body.contenido,
      idUsuario: idUsuario,
      idVideoJuego: idVideoJuego,
    });
    return res.status(201).json(newResenia);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getReviewsVideoJuegosId = async (req, res) => {
  try {
    const id = req.params.id;
    const videoJuego = await VideoJuego.findByPk(id);
    if (!videoJuego) {
      return res.status(404).json({ error: "videojuego no encontrado" });
    }
    const resenia = await Resenia.findAll({
      where: {
        idVideoJuego: id,
      },
    });
    if (resenia.length === 0) {
      return res.status(404).json({ error: "reseña no encontrada" });
    }
    return res.json(resenia);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getReviewsUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }
    const resenia = await Resenia.findAll({
      where: {
        idUsuario: id,
      },
    });
    if (resenia.length === 0) {
      return res.status(404).json({ error: "reseña no encontrada" });
    }
    return res.json(resenia);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//eliminar review por id
export const eliminarReviewId = async (req, res) => {
  try {
    const id = req.params.id;
    const resenia = await Resenia.findByPk(id);
    if (!resenia) {
      return res.status(404).json({ error: "reseña no encontrada" });
    }
    await resenia.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Tener la consulta que permite modificar la información de un review dado su id.
export const modificarReview = async (req, res) => {
  try {
    const id = req.params.id;
    const resenia = await Resenia.findByPk(id);

    //verificar que existe
    if (!resenia) {
      return res.status(404).json({ error: "reseña no encontrada" });
    }

    await resenia.update(req.body);
    return res.json(resenia);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
