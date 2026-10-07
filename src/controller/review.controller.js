import { Review } from "../models/Review.js";
import { User } from "../models/User.js";
import { VideoGame } from "../models/VideoGame.js";

//validar que los ratings sean enteros entre 0 y 5
const validateRatings = (body) => {
  const ratings = [
    body.gameplayRating,
    body.graphicsRating,
    body.storyRating,
  ];
  return ratings.every(
    (rating) => Number.isInteger(rating) && rating >= 0 && rating <= 5
  );
};

//crear reseña con id de usuario, videojuego e información de la reseña
export const createReview = async (req, res) => {
  try {
    const userId = req.params.userId;
    const videoGameId = req.params.videoGameId;
    const gameplayRating = req.body.gameplayRating;
    const graphicsRating = req.body.graphicsRating;
    const storyRating = req.body.storyRating;
    const content = req.body.content;

    const user = await User.findByPk(userId);
    const videoGame = await VideoGame.findByPk(videoGameId);

    if (!user) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }

    if (!videoGame) {
      return res.status(404).json({ error: "videoJuego no encontrado" });
    }

    if (!validateRatings(req.body)) {
      return res.status(400).json({
        error:
          "gameplayRating, graphicsRating y storyRating deben ser enteros entre 0 y 5",
      });
    }

    if (typeof content !== "string" || content.length === 0) {
      return res.status(400).json({
        error: "el contenido de la reseña debe tener al menos un caracter",
      });
    }

    //verificar que un usuario tenga UNA sola reseña por videoJuego
    const existingReview = await Review.findOne({
      where: {
        userId: userId,
        videoGameId: videoGameId,
      },
    });

    if (existingReview) {
      return res
        .status(400)
        .json({ error: "el usuario ya tiene una reseña para ese videojuego" });
    }

    const newReview = await Review.create({
      gameplayRating: gameplayRating,
      graphicsRating: graphicsRating,
      storyRating: storyRating,
      content: content,
      userId: userId,
      videoGameId: videoGameId,
    });
    return res.status(201).json(newReview);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getReviewsByVideoGameId = async (req, res) => {
  try {
    const id = req.params.id;
    const videoGame = await VideoGame.findByPk(id);
    if (!videoGame) {
      return res.status(404).json({ error: "videojuego no encontrado" });
    }
    const reviews = await Review.findAll({
      where: {
        videoGameId: id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username", "photoUrl"],
        },
        {
          model: VideoGame,
          as: "videoGame",
          attributes: ["name", "imageUrl", "developer"],
        },
      ],
    });
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getReviewsByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }
    const reviews = await Review.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username", "photoUrl"],
        },
        {
          model: VideoGame,
          as: "videoGame",
          attributes: ["name", "imageUrl", "developer"],
        },
      ],
    });
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//eliminar review por id
export const deleteReviewById = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "reseña no encontrada" });
    }
    await review.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Tener la consulta que permite modificar la información de un review dado su id.
export const updateReviewById = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await Review.findByPk(id);
    const gameplayRating = req.body.gameplayRating;
    const graphicsRating = req.body.graphicsRating;
    const storyRating = req.body.storyRating;
    const content = req.body.content;

    //verificar que existe
    if (!review) {
      return res.status(404).json({ error: "reseña no encontrada" });
    }

    if (!validateRatings(req.body)) {
      return res.status(400).json({
        error:
          "gameplayRating, graphicsRating y storyRating deben ser enteros entre 0 y 5",
      });
    }

    if (typeof content !== "string" || content.length === 0) {
      return res.status(400).json({
        error: "el contenido de la reseña debe tener al menos un caracter",
      });
    }

    await review.update({
      gameplayRating: gameplayRating,
      graphicsRating: graphicsRating,
      storyRating: storyRating,
      content: content,
    });
    return res.json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
