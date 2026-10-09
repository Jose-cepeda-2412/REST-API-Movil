// Inicializar arreglo de datos (VideoJuegos) para insertar en la BD
import { VideoGame } from "../models/VideoGame.js";

const initVideoGames = [
  {
    name: "Starfield",
    description:
      "Un RPG de ciencia ficción ambientado en un vasto universo explorable.",
    developer: "Bethesda Game Studios",
    platform: "Multiplataforma",
    releaseDate: "2023-09-06",
    imageUrl:
      "https://sm.ign.com/ign_nordic/cover/s/starfield/starfield_dzsh.jpg",
  },
  {
    name: "Elden Ring",
    description:
      "Un RPG de acción en mundo abierto lleno de desafíos, exploración y combates.",
    developer: "FromSoftware",
    platform: "Multiplataforma",
    releaseDate: "2022-02-25",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Cyberpunk 2077",
    description:
      "Un RPG de acción ambientado en Night City, una ciudad futurista dominada por tecnología y poder.",
    developer: "CD Projekt Red",
    platform: "Multiplataforma",
    releaseDate: "2020-12-10",
    imageUrl: "https://i.redd.it/p99esbve7sf81.jpg",
  },
  {
    name: "The Last of Us Part II",
    description:
      "Una aventura de acción centrada en una historia de supervivencia en un mundo posapocalíptico.",
    developer: "Naughty Dog",
    platform: "Multiplataforma",
    releaseDate: "2020-06-19",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Baldur's Gate 3",
    description:
      "Un RPG de fantasía basado en decisiones, exploración y combates estratégicos por turnos.",
    developer: "Larian Studios",
    platform: "Multiplataforma",
    releaseDate: "2023-08-03",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Red Dead Redemption 2",
    description:
      "Una aventura de mundo abierto ambientada en el final de la era del Salvaje Oeste.",
    developer: "Rockstar Games",
    platform: "Multiplataforma",
    releaseDate: "2018-10-26",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "God of War Ragnarök",
    description:
      "Una aventura de acción que continúa el viaje de Kratos y Atreus por los nueve reinos.",
    developer: "Santa Monica Studio",
    platform: "Multiplataforma",
    releaseDate: "2022-11-09",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Hogwarts Legacy",
    description:
      "Un RPG de acción en mundo abierto ambientado en el universo mágico de Hogwarts.",
    developer: "Avalanche Software",
    platform: "Multiplataforma",
    releaseDate: "2023-02-10",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Resident Evil 4",
    description:
      "Un juego de acción y terror donde Leon Kennedy debe rescatar a la hija del presidente.",
    developer: "Capcom",
    platform: "Multiplataforma",
    releaseDate: "2023-03-24",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Marvel's Spider-Man 2",
    description:
      "Una aventura de acción protagonizada por Peter Parker y Miles Morales en Nueva York.",
    developer: "Insomniac Games",
    platform: "Multiplataforma",
    releaseDate: "2023-10-20",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "The Witcher 3: Wild Hunt",
    description:
      "Un RPG de mundo abierto donde Geralt de Rivia explora un mundo lleno de monstruos y conflictos.",
    developer: "CD Projekt Red",
    platform: "Multiplataforma",
    releaseDate: "2015-05-19",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Grand Theft Auto V",
    description:
      "Un juego de acción y mundo abierto centrado en tres protagonistas en la ciudad de Los Santos.",
    developer: "Rockstar North",
    platform: "Multiplataforma",
    releaseDate: "2013-09-17",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Minecraft",
    description:
      "Un juego de construcción y supervivencia que permite explorar y modificar mundos formados por bloques.",
    developer: "Mojang Studios",
    platform: "Multiplataforma",
    releaseDate: "2011-11-18",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Sekiro: Shadows Die Twice",
    description:
      "Un juego de acción y aventura ambientado en un Japón fantástico inspirado en el periodo Sengoku.",
    developer: "FromSoftware",
    platform: "Multiplataforma",
    releaseDate: "2019-03-22",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Hades",
    description:
      "Un roguelike de acción donde Zagreus intenta escapar del inframundo de la mitología griega.",
    developer: "Supergiant Games",
    platform: "Multiplataforma",
    releaseDate: "2020-09-17",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Hollow Knight",
    description:
      "Una aventura de acción y exploración ambientada en el misterioso reino subterráneo de Hallownest.",
    developer: "Team Cherry",
    platform: "Multiplataforma",
    releaseDate: "2017-02-24",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Forza Horizon 5",
    description:
      "Un juego de carreras de mundo abierto ambientado en diferentes regiones de México.",
    developer: "Playground Games",
    platform: "Multiplataforma",
    releaseDate: "2021-11-09",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "Death Stranding",
    description:
      "Una aventura de acción donde el jugador debe reconectar comunidades en un mundo fragmentado.",
    developer: "Kojima Productions",
    platform: "Multiplataforma",
    releaseDate: "2019-11-08",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "DOOM Eternal",
    description:
      "Un shooter en primera persona de ritmo rápido centrado en combatir hordas de demonios.",
    developer: "id Software",
    platform: "Multiplataforma",
    releaseDate: "2020-03-20",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
  {
    name: "It Takes Two",
    description:
      "Una aventura cooperativa diseñada para dos jugadores con desafíos y mecánicas variadas.",
    developer: "Hazelight Studios",
    platform: "Multiplataforma",
    releaseDate: "2021-03-26",
    imageUrl: "URL_DE_LA_IMAGEN",
  },
];

//funcion para guardar en la BD, es asincrona porque debe ir a la BD y devolver la respuesta si pudo inizialira la BD
export async function loadInitVideoGames() {
  try {
    //contar cuantos datos hay en la BD, si esta vacio ingresar los juegos
    const count = await VideoGame.count();
    if (count == 0) {
      await VideoGame.bulkCreate(initVideoGames);
      console.log("videoJuegos cargados a BD");
    }
  } catch (error) {
    console.log(error);
  }
}
