import express from "express";
import morgan from "morgan";
import router from "./router/router.js";

const app = express();

// controlamos los get and post del api
app.use(morgan("dev"));

// escuchamos un puerto 3000
app.listen(3000, () => {
  console.log("por on 3000");
});

// usamos las rutas
app.use("/api", router);

// analizamos solicitudes JSON
app.use(express.json());

// analizamos solicitudes con cuerpo codificado en URL
app.use(express.urlencoded({ extended: true }));
