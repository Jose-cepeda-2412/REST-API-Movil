import { Resenia } from "../models/Resenia.js";

//eliminar review por id
export const eliminarReviewId = async (req, res) => {
  const id = req.params.id;
  const resenia = await Resenia.findByPk(id);
  await resenia.destroy();
  return res.sendStatus(204);
};
