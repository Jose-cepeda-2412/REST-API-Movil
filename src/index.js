import app from "./app.js";

function intit() {
  app.listen(3000, () => {
    console.log("serever on port 3000");
  });
}

intit();
