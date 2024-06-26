import express from "express";
import { getAi } from "../controllers/AiBizController.js";

const router = express.Router();

router.post("/aibiz", getAi);

export default router;
