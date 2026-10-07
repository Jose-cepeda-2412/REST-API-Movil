import { VideoGame } from "../models/VideoGame.js";

export const getVideoGames = async (req, rep) => {
  try {
    const videoGames = await VideoGame.findAll();
    return rep.json(videoGames);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//consulta que permite traer el detalle de un videoJuego por id del videoJuego
export const getVideoGameById = async (req, rep) => {
  try {
    const id = req.params.id;
    const videoGame = await VideoGame.findByPk(id);
    return rep.json(videoGame);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
