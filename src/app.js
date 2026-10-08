import express from "express";
import userRoutes from "./routes/users.routes.js";
import videoGameRoutes from "./routes/videoGames.routes.js";
import reviewRoutes from "./routes/reviews.routes.js";

const app = express();

app.use(express.json());

//log de peticiones para depurar desde la app móvil
app.use((req, _res, next) => {
  console.log(`[API] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(userRoutes);
app.use(videoGameRoutes);
app.use(reviewRoutes);

export default app;
