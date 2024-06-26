import express from "express";
import {
  getPenjualanHewanTernak,
  getPenjualanHewanTernakPerBulan,
  getPenjualanHewanTernakById,
  createPenjualanHewanTernak,
  updatePenjualanHewanTernak,
  deletePenjualanHewanTernak,
  getJumlahHewanTerjual,
} from "../controllers/penjualanHewanTernakController.js";

const router = express.Router();

router.get("/penjualanHewanTernak", getPenjualanHewanTernak);
router.get("/penjualanHewanTernakPerBulan/:tahun", getPenjualanHewanTernakPerBulan);
router.get("/penjualanHewanTernak/:id", getPenjualanHewanTernakById);
router.post("/penjualanHewanTernak", createPenjualanHewanTernak);
router.patch("/penjualanHewanTernak/:id", updatePenjualanHewanTernak);
router.delete("/penjualanHewanTernak/:id", deletePenjualanHewanTernak);

export default router;
