import Peternak from "../models/peternakModel.js";
import Dinas from "../models/dinasModel.js";

export const verifyPeternak = async (req, res, next) => {
  if (!req.session.idPeternak) {
    return res.status(401).json({ msg: "Anda belum login" });
  }
  const peternak = await Peternak.findOne({
    where: {
      idPeternak: req.session.idPeternak,
    },
  });
  if (!peternak) {
    return res.status(404).json({ msg: "Peternak tidak ditemukan" });
  }
  req.idPeternak = peternak.idPeternak;
  next();
};

export const verifyDinas = async (req, res, next) => {
  if (!req.session.idDinas) {
    return res.status(401).json({ msg: "Anda belum login" });
  }
  const dinas = await Dinas.findOne({
    where: {
      idDinas: req.session.idDinas,
    },
  });
  if (!dinas) {
    return res.status(404).json({ msg: "Peternak tidak ditemukan" });
  }
  req.idDinas = dinas.idDinas;
  next();
};
