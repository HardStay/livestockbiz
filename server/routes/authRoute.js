import express from "express";
import { Login, Logout, Me, LoginDinas, MeDinas } from "../controllers/authController.js";  

const router = express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", Logout);
router.get("/meDinas", MeDinas);
router.post("/loginDinas", LoginDinas);

export default router;
