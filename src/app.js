import express from "express";
import userRoutes from "./routes/users.routes.js";
import videoGameRoutes from "./routes/videoGames.routes.js";
import reviewRoutes from "./routes/reviews.routes.js";

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(videoGameRoutes);
app.use(reviewRoutes);

export default app;
