import express from "express";
import usuarioRoutes from "./routes/usuarios.routes.js";
import videoJuegosRoutes from "./routes/videoJuegos.routes.js";

const app = express();

app.use(express.json());

app.use(usuarioRoutes);
app.use(videoJuegosRoutes);

export default app;
