import { Resenia } from "../models/Resenia.js";

const initResenia = [
  {
    idUsuario: 1,
    idVideoJuego: 1,
    ratingJugabilidad: 5,
    ratingGraficos: 4,
    ratingHistoria: 5,
    contenido:
      "Excelente juego, la historia y la jugabilidad me gustaron mucho.",
  },
  {
    idUsuario: 1,
    idVideoJuego: 2,
    ratingJugabilidad: 4,
    ratingGraficos: 4,
    ratingHistoria: 3,
    contenido: "Muy buen juego, aunque algunas partes pueden mejorar.",
  },
  {
    idUsuario: 1,
    idVideoJuego: 3,
    ratingJugabilidad: 5,
    ratingGraficos: 5,
    ratingHistoria: 5,
    contenido: "Uno de mis juegos favoritos. Lo recomiendo completamente.",
  },
  {
    idUsuario: 2,
    idVideoJuego: 1,
    ratingJugabilidad: 4,
    ratingGraficos: 5,
    ratingHistoria: 4,
    contenido: "Me gusto bastante la experiencia y el mundo del juego.",
  },
  {
    idUsuario: 2,
    idVideoJuego: 3,
    ratingJugabilidad: 3,
    ratingGraficos: 4,
    ratingHistoria: 2,
    contenido: "Es entretenido, pero esperaba un poco mas de la historia.",
  },
  {
    idUsuario: 3,
    idVideoJuego: 1,
    ratingJugabilidad: 5,
    ratingGraficos: 4,
    ratingHistoria: 4,
    contenido: "La jugabilidad es excelente y tiene muchisimo contenido.",
  },
  {
    idUsuario: 3,
    idVideoJuego: 2,
    ratingJugabilidad: 2,
    ratingGraficos: 3,
    ratingHistoria: 2,
    contenido: "No fue lo que esperaba y algunas mecanicas no me convencieron.",
  },
  {
    idUsuario: 4,
    idVideoJuego: 1,
    ratingJugabilidad: 4,
    ratingGraficos: 4,
    ratingHistoria: 4,
    contenido: "Muy divertido y con buenos momentos durante toda la partida.",
  },
  {
    idUsuario: 4,
    idVideoJuego: 3,
    ratingJugabilidad: 4,
    ratingGraficos: 5,
    ratingHistoria: 5,
    contenido: "Me encanto. La ambientacion y la historia son excelentes.",
  },
  {
    idUsuario: 5,
    idVideoJuego: 2,
    ratingJugabilidad: 3,
    ratingGraficos: 3,
    ratingHistoria: 3,
    contenido: "Esta bien para pasar el rato, pero tiene cosas por mejorar.",
  },
  {
    idUsuario: 5,
    idVideoJuego: 3,
    ratingJugabilidad: 4,
    ratingGraficos: 3,
    ratingHistoria: 4,
    contenido: "Una experiencia muy buena y bastante entretenida.",
  },
  {
    idUsuario: 6,
    idVideoJuego: 1,
    ratingJugabilidad: 2,
    ratingGraficos: 4,
    ratingHistoria: 2,
    contenido:
      "Tiene buenas ideas, pero personalmente no termino de convencerme.",
  },
  {
    idUsuario: 6,
    idVideoJuego: 2,
    ratingJugabilidad: 5,
    ratingGraficos: 5,
    ratingHistoria: 5,
    contenido:
      "Me encanto de principio a fin. Definitivamente lo volveria a jugar.",
  },
];

export async function loadInitResenia() {
  try {
    //contar cuantos datos hay en la BD, si esta vacio ingresar los usuarios
    const count = await Resenia.count();
    if (count == 0) {
      await Resenia.bulkCreate(initResenia);
      console.log("Reseñas cargadas a BD");
    } else {
      console.log("Ya hay reseñas en la BD");
    }
  } catch (error) {
    console.log(error);
  }
}
