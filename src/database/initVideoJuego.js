// Inicializar arreglo de datos (VideoJuegos) para insertar en la BD
import { VideoJuego } from "../models/VideoJuego.js";

const InitVideoJuegos = [
  {
    nombre: "Starfield",
    descripcion:
      "Un RPG de ciencia ficción ambientado en un vasto universo explorable.",
    desarrollador: "Bethesda Game Studios",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2023-09-06",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Elden Ring",
    descripcion:
      "Un RPG de acción en mundo abierto lleno de desafíos, exploración y combates.",
    desarrollador: "FromSoftware",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2022-02-25",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Cyberpunk 2077",
    descripcion:
      "Un RPG de acción ambientado en Night City, una ciudad futurista dominada por tecnología y poder.",
    desarrollador: "CD Projekt Red",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2020-12-10",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "The Last of Us Part II",
    descripcion:
      "Una aventura de acción centrada en una historia de supervivencia en un mundo posapocalíptico.",
    desarrollador: "Naughty Dog",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2020-06-19",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Baldur's Gate 3",
    descripcion:
      "Un RPG de fantasía basado en decisiones, exploración y combates estratégicos por turnos.",
    desarrollador: "Larian Studios",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2023-08-03",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Red Dead Redemption 2",
    descripcion:
      "Una aventura de mundo abierto ambientada en el final de la era del Salvaje Oeste.",
    desarrollador: "Rockstar Games",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2018-10-26",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "God of War Ragnarök",
    descripcion:
      "Una aventura de acción que continúa el viaje de Kratos y Atreus por los nueve reinos.",
    desarrollador: "Santa Monica Studio",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2022-11-09",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Hogwarts Legacy",
    descripcion:
      "Un RPG de acción en mundo abierto ambientado en el universo mágico de Hogwarts.",
    desarrollador: "Avalanche Software",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2023-02-10",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Resident Evil 4",
    descripcion:
      "Un juego de acción y terror donde Leon Kennedy debe rescatar a la hija del presidente.",
    desarrollador: "Capcom",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2023-03-24",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Marvel's Spider-Man 2",
    descripcion:
      "Una aventura de acción protagonizada por Peter Parker y Miles Morales en Nueva York.",
    desarrollador: "Insomniac Games",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2023-10-20",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "The Witcher 3: Wild Hunt",
    descripcion:
      "Un RPG de mundo abierto donde Geralt de Rivia explora un mundo lleno de monstruos y conflictos.",
    desarrollador: "CD Projekt Red",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2015-05-19",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Grand Theft Auto V",
    descripcion:
      "Un juego de acción y mundo abierto centrado en tres protagonistas en la ciudad de Los Santos.",
    desarrollador: "Rockstar North",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2013-09-17",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Minecraft",
    descripcion:
      "Un juego de construcción y supervivencia que permite explorar y modificar mundos formados por bloques.",
    desarrollador: "Mojang Studios",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2011-11-18",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Sekiro: Shadows Die Twice",
    descripcion:
      "Un juego de acción y aventura ambientado en un Japón fantástico inspirado en el periodo Sengoku.",
    desarrollador: "FromSoftware",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2019-03-22",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Hades",
    descripcion:
      "Un roguelike de acción donde Zagreus intenta escapar del inframundo de la mitología griega.",
    desarrollador: "Supergiant Games",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2020-09-17",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Hollow Knight",
    descripcion:
      "Una aventura de acción y exploración ambientada en el misterioso reino subterráneo de Hallownest.",
    desarrollador: "Team Cherry",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2017-02-24",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Forza Horizon 5",
    descripcion:
      "Un juego de carreras de mundo abierto ambientado en diferentes regiones de México.",
    desarrollador: "Playground Games",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2021-11-09",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "Death Stranding",
    descripcion:
      "Una aventura de acción donde el jugador debe reconectar comunidades en un mundo fragmentado.",
    desarrollador: "Kojima Productions",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2019-11-08",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "DOOM Eternal",
    descripcion:
      "Un shooter en primera persona de ritmo rápido centrado en combatir hordas de demonios.",
    desarrollador: "id Software",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2020-03-20",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    nombre: "It Takes Two",
    descripcion:
      "Una aventura cooperativa diseñada para dos jugadores con desafíos y mecánicas variadas.",
    desarrollador: "Hazelight Studios",
    plataforma: "Multiplataforma",
    fechaLanzamiento: "2021-03-26",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
];

//funcion para guardar en la BD, es asincrona porque debe ir a la BD y devolver la respuesta si pudo inizialira la BD
export async function loadInitVideoJuegos() {
  //contar cuantos datos hay en la BD, si esta vacio ingresar los juegos
  const count = await VideoJuego.count();
  if (count == 0) {
    await VideoJuego.bulkCreate(InitVideoJuegos);
    console.log("videoJuegos cargados a BD");
  }
}
