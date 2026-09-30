import { Resenia } from "../models/Resenia.js";

//eliminar review por id
export const eliminarReviewId = async (req, res) => {
  try {
    const id = req.params.id;
    const resenia = await Resenia.findByPk(id);
    await resenia.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500).json({ error: error.message });
  }
};

//Tener la consulta que permite modificar la información de un review dado su id.
export const modificarReview = async (req, res) => {
  try {
    const id = req.params.id;
    const resenia = await Resenia.findByPk(id);

    //verificar que existe
    if (!resenia) {
      return res.sendStatus(404).json({ error: "reseña no encontrada" });
    }

    await resenia.update(req.body);
    return res.json(resenia);
  } catch (error) {
    return res.sendStatus(500).json({ error: error.message });
  }
};
