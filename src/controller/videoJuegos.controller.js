import { VideoJuego } from "../models/VideoJuego.js";

export const getVideoJuegos = async (req, rep) => {
  const videoJuegos = await VideoJuego.findAll();
  return rep.json(videoJuegos);
};

//consulta que permite traer el detalle de un videoJuego por id del videoJuego
export const getVideoJuegosId = async (req, rep) => {
  const id = req.params.id;
  const videoJuego = await VideoJuego.findByPk(id);
  return rep.json(videoJuego);
};
