import express from "express";
import { getHewanTernak, getHewanTernakByProvinsi, getHewanTernakByTahunAndJenis, getHewanTernakByTahun, getHewanTernakById, createHewanTernak, updateHewanTernak, deleteHewanTernak } from "../controllers/hewanTernakController.js";

const router = express.Router();

router.get("/hewanTernak", getHewanTernak);
router.get("/hewanTernak/:id", getHewanTernakById);
router.get("/hewanTernakByTahun/:tahun", getHewanTernakByTahun);
router.post("/hewanTernak", createHewanTernak);
router.post("/hewanTernakByProvinsi", getHewanTernakByProvinsi);
router.post("/hewanTernakByTahunAndJenis", getHewanTernakByTahunAndJenis);
router.patch("/hewanTernak/:id", updateHewanTernak);
router.delete("/hewanTernak/:id", deleteHewanTernak);

export default router;
