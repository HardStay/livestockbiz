import express from "express";
import { getHewanTernak, getHewanTernakByProvinsi, getHewanTernakByTahunAndJenis, getHewanTernakByTahunAndJenisId, getHewanTernakByTahun, getHewanTernakByTahunAndId, getHewanTernakById, createHewanTernak, updateHewanTernak, deleteHewanTernak } from "../controllers/hewanTernakController.js";
import { verifyPeternak } from "../middleware/authUser.js";
const router = express.Router();

router.get("/hewanTernak/:id", getHewanTernakById);
router.get("/hewanTernakByTahun/:tahun", getHewanTernakByTahun);
router.post("/gethewanTernak", verifyPeternak, getHewanTernak);
router.post("/hewanTernakByTahunAndId", getHewanTernakByTahunAndId);
router.post("/hewanTernak", verifyPeternak, createHewanTernak);
router.post("/hewanTernakByProvinsi", getHewanTernakByProvinsi);
router.post("/hewanTernakByTahunAndJenis", getHewanTernakByTahunAndJenis);
router.post("/hewanTernakByTahunAndJenisId", getHewanTernakByTahunAndJenisId);
router.patch("/hewanTernak/:id", verifyPeternak ,updateHewanTernak);
router.delete("/hewanTernak/:id", verifyPeternak, deleteHewanTernak);

export default router;
