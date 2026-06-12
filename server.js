const express = require("express");
const path = require("path");

require("./db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("views"));

const motosRoutes = require("./routes/motos");

app.use("/api/motos", motosRoutes);

app.listen(80,"0.0.0.0", () => {
    console.log("Estado del servidor: Operativo");
});