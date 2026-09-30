import { VideoJuego } from "../models/VideoJuego.js";

export const getVideoJuegos = async (req, rep) => {
  try {
    const videoJuegos = await VideoJuego.findAll();
    return rep.json(videoJuegos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//consulta que permite traer el detalle de un videoJuego por id del videoJuego
export const getVideoJuegosId = async (req, rep) => {
  try {
    const id = req.params.id;
    const videoJuego = await VideoJuego.findByPk(id);
    return rep.json(videoJuego);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
