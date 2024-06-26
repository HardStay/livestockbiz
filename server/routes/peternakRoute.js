import express from "express";
import { getPeternak, getPeternakById, createPeternak, updatePeternak, deletePeternak } from "../controllers/peternakController.js";

const router = express.Router();

router.get("/peternak", getPeternak);
router.get("/peternak/:id", getPeternakById);
router.post("/peternak", createPeternak);
router.patch("/peternak/:id", updatePeternak);
router.delete("/peternak/:id", deletePeternak);

export default router;
