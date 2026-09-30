import { Resenia } from "../models/Resenia.js";

//crear reseña con id de usuario, videojuego e información de la reseña
export const postCrearResenia = async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;
    const idVideoJuego = req.params.idVideoJuego;
    const newResenia = await Resenia.create({
      calificacion: req.body.calificacion,
      fechaResenia: req.body.fechaResenia,
      contenido: req.body.contenido,
      idUsuario: idUsuario,
      idVideoJuego: idVideoJuego,
    });
    return res.json(newResenia);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getReviewsVideoJuegosId = async (req, res) => {
  const id = req.params.id;
  try {
    const resenia = await Resenia.findAll({
      where: {
        idVideoJuego: id,
      },
    });
    if (resenia === 0) {
      return res.status(404).json({ error: "reseña no encontrada" });
    }
    return res.json(resenia);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getReviewsUserId = async (req, res) => {
  const id = req.params.id;
  try {
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
    await resenia.destroy();
    return res.status(204);
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
