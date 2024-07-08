import express from "express";
import { getDinas, getDinasById, createDinas, updateDinas, deleteDinas } from "../controllers/dinasController.js";
import { verifyDinas } from "../middleware/authUser.js";
const router = express.Router();

router.get("/dinas", verifyDinas, getDinas);
router.get("/dinas/:id", verifyDinas, getDinasById);
router.post("/dinas", createDinas);
router.patch("/dinas/:id", verifyDinas, updateDinas);
router.delete("/dinas/:id", verifyDinas, deleteDinas);

export default router;
