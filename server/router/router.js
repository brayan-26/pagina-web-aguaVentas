import { Router } from "express";
import {
  getProductos,
  register,
  validarUser,
} from "../controller/auth.controller.js";

const router = Router();

router.post("/register", validarUser, register);
router.post("/getProductos", getProductos);

export default router;
