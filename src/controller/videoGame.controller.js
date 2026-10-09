import { VideoGame } from "../models/VideoGame.js";

export const getVideoGames = async (req, res) => {
  try {
    const videoGames = await VideoGame.findAll();
    return res.json(videoGames);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//consulta que permite traer el detalle de un videoJuego por id del videoJuego
export const getVideoGameById = async (req, res) => {
  try {
    const { id } = req.params;

    const videoGame = await VideoGame.findByPk(id);

    if (!videoGame) {
      return res.status(404).json({
        message: "Videojuego no encontrado",
      });
    }

    return res.status(200).json(videoGame);
  } catch (error) {
    console.error("Error al obtener videojuego:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
