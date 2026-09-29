import { Resenia } from "../models/Resenia.js";

const initResenia = [
  {
    idUsuario: 1,
    idVideoJuego: 1,
    calificacion: 5,
    fechaResenia: "2026-09-10",
    contenido:
      "Excelente juego, la historia y la jugabilidad me gustaron mucho.",
  },
  {
    idUsuario: 1,
    idVideoJuego: 2,
    calificacion: 4,
    fechaResenia: "2026-09-12",
    contenido: "Muy buen juego, aunque algunas partes pueden mejorar.",
  },
  {
    idUsuario: 1,
    idVideoJuego: 3,
    calificacion: 5,
    fechaResenia: "2026-09-15",
    contenido: "Uno de mis juegos favoritos. Lo recomiendo completamente.",
  },
  {
    idUsuario: 2,
    idVideoJuego: 1,
    calificacion: 4,
    fechaResenia: "2026-09-16",
    contenido: "Me gusto bastante la experiencia y el mundo del juego.",
  },
  {
    idUsuario: 2,
    idVideoJuego: 3,
    calificacion: 3,
    fechaResenia: "2026-09-17",
    contenido: "Es entretenido, pero esperaba un poco mas de la historia.",
  },
  {
    idUsuario: 3,
    idVideoJuego: 1,
    calificacion: 5,
    fechaResenia: "2026-09-18",
    contenido: "La jugabilidad es excelente y tiene muchisimo contenido.",
  },
  {
    idUsuario: 3,
    idVideoJuego: 2,
    calificacion: 2,
    fechaResenia: "2026-09-19",
    contenido: "No fue lo que esperaba y algunas mecanicas no me convencieron.",
  },
  {
    idUsuario: 4,
    idVideoJuego: 1,
    calificacion: 4,
    fechaResenia: "2026-09-20",
    contenido: "Muy divertido y con buenos momentos durante toda la partida.",
  },
  {
    idUsuario: 4,
    idVideoJuego: 3,
    calificacion: 5,
    fechaResenia: "2026-09-21",
    contenido: "Me encanto. La ambientacion y la historia son excelentes.",
  },
  {
    idUsuario: 5,
    idVideoJuego: 2,
    calificacion: 3,
    fechaResenia: "2026-09-22",
    contenido: "Esta bien para pasar el rato, pero tiene cosas por mejorar.",
  },
  {
    idUsuario: 5,
    idVideoJuego: 3,
    calificacion: 4,
    fechaResenia: "2026-09-23",
    contenido: "Una experiencia muy buena y bastante entretenida.",
  },
  {
    idUsuario: 6,
    idVideoJuego: 1,
    calificacion: 2,
    fechaResenia: "2026-09-24",
    contenido:
      "Tiene buenas ideas, pero personalmente no termino de convencerme.",
  },
  {
    idUsuario: 6,
    idVideoJuego: 2,
    calificacion: 5,
    fechaResenia: "2026-09-25",
    contenido:
      "Me encanto de principio a fin. Definitivamente lo volveria a jugar.",
  },
];

export async function loadInitResenia() {
  //contar cuantos datos hay en la BD, si esta vacio ingresar los usuarios
  const count = await Resenia.count();
  if (count == 0) {
    await Resenia.bulkCreate(initResenia);
    console.log("Reseñas cargadas a BD");
  }
}
