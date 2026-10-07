import { Review } from "../models/Review.js";

const initReviews = [
  {
    userId: 1,
    videoGameId: 1,
    gameplayRating: 5,
    graphicsRating: 4,
    storyRating: 5,
    content:
      "Excelente juego, la historia y la jugabilidad me gustaron mucho.",
  },
  {
    userId: 1,
    videoGameId: 2,
    gameplayRating: 4,
    graphicsRating: 4,
    storyRating: 3,
    content: "Muy buen juego, aunque algunas partes pueden mejorar.",
  },
  {
    userId: 1,
    videoGameId: 3,
    gameplayRating: 5,
    graphicsRating: 5,
    storyRating: 5,
    content: "Uno de mis juegos favoritos. Lo recomiendo completamente.",
  },
  {
    userId: 2,
    videoGameId: 1,
    gameplayRating: 4,
    graphicsRating: 5,
    storyRating: 4,
    content: "Me gusto bastante la experiencia y el mundo del juego.",
  },
  {
    userId: 2,
    videoGameId: 3,
    gameplayRating: 3,
    graphicsRating: 4,
    storyRating: 2,
    content: "Es entretenido, pero esperaba un poco mas de la historia.",
  },
  {
    userId: 3,
    videoGameId: 1,
    gameplayRating: 5,
    graphicsRating: 4,
    storyRating: 4,
    content: "La jugabilidad es excelente y tiene muchisimo contenido.",
  },
  {
    userId: 3,
    videoGameId: 2,
    gameplayRating: 2,
    graphicsRating: 3,
    storyRating: 2,
    content: "No fue lo que esperaba y algunas mecanicas no me convencieron.",
  },
  {
    userId: 4,
    videoGameId: 1,
    gameplayRating: 4,
    graphicsRating: 4,
    storyRating: 4,
    content: "Muy divertido y con buenos momentos durante toda la partida.",
  },
  {
    userId: 4,
    videoGameId: 3,
    gameplayRating: 4,
    graphicsRating: 5,
    storyRating: 5,
    content: "Me encanto. La ambientacion y la historia son excelentes.",
  },
  {
    userId: 5,
    videoGameId: 2,
    gameplayRating: 3,
    graphicsRating: 3,
    storyRating: 3,
    content: "Esta bien para pasar el rato, pero tiene cosas por mejorar.",
  },
  {
    userId: 5,
    videoGameId: 3,
    gameplayRating: 4,
    graphicsRating: 3,
    storyRating: 4,
    content: "Una experiencia muy buena y bastante entretenida.",
  },
  {
    userId: 6,
    videoGameId: 1,
    gameplayRating: 2,
    graphicsRating: 4,
    storyRating: 2,
    content:
      "Tiene buenas ideas, pero personalmente no termino de convencerme.",
  },
  {
    userId: 6,
    videoGameId: 2,
    gameplayRating: 5,
    graphicsRating: 5,
    storyRating: 5,
    content:
      "Me encanto de principio a fin. Definitivamente lo volveria a jugar.",
  },
];

export async function loadInitReviews() {
  try {
    //contar cuantos datos hay en la BD, si esta vacio ingresar los usuarios
    const count = await Review.count();
    if (count == 0) {
      await Review.bulkCreate(initReviews);
      console.log("Reseñas cargadas a BD");
    } else {
      console.log("Ya hay reseñas en la BD");
    }
  } catch (error) {
    console.log(error);
  }
}
