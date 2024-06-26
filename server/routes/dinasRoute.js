import express from "express";
import { getDinas, getDinasById, createDinas, updateDinas, deleteDinas } from "../controllers/dinasController.js";

const router = express.Router();

router.get("/dinas", getDinas);
router.get("/dinas/:id", getDinasById);
router.post("/dinas", createDinas);
router.patch("/dinas/:id", updateDinas);
router.delete("/dinas/:id", deleteDinas);

export default router;
