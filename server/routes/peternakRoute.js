import express from "express";
import {
  getPeternak,
  getPeternakById,
  createPeternak,
  updatePeternak,
  deletePeternak,
} from "../controllers/peternakController.js";
import { verifyPeternak, verifyDinas } from "../middleware/authUser.js";

const router = express.Router();

router.get("/peternak", verifyDinas || verifyPeternak, getPeternak);
router.get("/peternak/:id", verifyDinas || verifyPeternak, getPeternakById);
router.post("/peternak", createPeternak);
router.patch("/peternak/:id", verifyDinas || verifyPeternak, updatePeternak);
router.delete("/peternak/:id", verifyDinas || verifyPeternak, deletePeternak);

export default router;
