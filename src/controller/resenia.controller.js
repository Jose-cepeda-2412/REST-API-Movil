import { Resenia } from "../models/Resenia.js";
import { Usuario } from "../models/Usuario.js";
import { VideoJuego } from "../models/VideoJuego.js";
//crear reseña con id de usuario, videojuego e información de la reseña
export const postCrearResenia = async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;
    const idVideoJuego = req.params.idVideoJuego;
    const calificacion = req.body.calificacion;
    const contenido = req.body.contenido;
    const fechaResenia = new Date();

    const usuario = await Usuario.findByPk(idUsuario);
    const videoJuego = await VideoJuego.findByPk(idVideoJuego);

    if (!usuario) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }

    if (!videoJuego) {
      return res.status(404).json({ error: "videoJuego no encontrado" });
    }

    if (
      typeof calificacion !== "number" ||
      calificacion < 0 ||
      calificacion > 5
    ) {
      return res
        .status(400)
        .json({ error: "calificación debe estar entre 0 y 5" });
    }

    if (typeof contenido !== "string" || contenido.length === 0) {
      return res.status(400).json({
        error: "el contenido de la reseña debe tener al menos un caracter",
      });
    }

    //verificar que un usuario tenga UNA sola reseña por videoJuego
    const reseniaExistente = await Resenia.findOne({
      where: {
        idUsuario: idUsuario,
        idVideoJuego: idVideoJuego,
      },
    });

    if (reseniaExistente) {
      return res
        .status(400)
        .json({ error: "el usuario ya tiene una reseña para ese videojuego" });
    }

    const newResenia = await Resenia.create({
      calificacion: calificacion,
      fechaResenia: fechaResenia,
      contenido: contenido,
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
    return res.status(200).json(resenia);
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
    return res.status(200).json(resenia);
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
