import Peternak from "../models/peternakModel.js";
import bcrypt from "bcrypt";
import Dinas from "../models/dinasModel.js";

export const Login = async (req, res) => {
  const peternak = await Peternak.findOne({
    where: {
      usernamePeternak: req.body.username,
    },
  });
  if (!peternak) {
    return res.status(404).json({ msg: "Peternak tidak ditemukan" });
  }
  const password = req.body.password;
  const hashed = peternak.passwordPeternak;
  try {
    const match = await bcrypt.compare(
      password,
      hashed
    );
    if (!match) {
      return res.status(400).json({ msg: "Password Salah" });
    }
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return res.status(500).json({ msg: "Server error" });
  }

  req.session.idPeternak = peternak.idPeternak;
  const id = peternak.idPeternak;
  const nama = peternak.namaPeternak;
  const username = peternak.usernamePeternak;
  const nomorTelepon = peternak.nomorTelepon;
  const idLokasi = peternak.idLokasi;
  res.status(200).json({ id, nama, username, nomorTelepon, idLokasi });
};

export const Me = async (req, res) => {
  if (!req.session.idPeternak) {
    return res.status(401).json({ msg: "Anda belum login" });
  }
  const peternak = await Peternak.findOne({
    attributes: [
      "idPeternak",
      "namaPeternak",
      "usernamePeternak",
      "nomorTelepon",
      "idLokasi",
    ],
    where: {
      idPeternak: req.session.idPeternak,
    },
  });
  if (!peternak) {
    return res.status(404).json({ msg: "Peternak tidak ditemukan" });
  }
  res.status(200).json(peternak);
};

export const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(400).json({ msg: "Tidak dapat logout" });
    }
    res.status(200).json({ msg: "Logout Berhasil" });
  });
};

export const LoginDinas = async (req, res) => {
  const dinas = await Dinas.findOne({
    where: {
      usernameDinas: req.body.username,
    },
  });
  if (!dinas) {
    return res.status(404).json({ msg: "Dinas tidak ditemukan" });
  }
  const match = await bcrypt.compare(req.body.password, dinas.passwordDinas);
  if (!match) {
    return res.status(400).json({ msg: "Password Salah" });
  }
  req.session.idDinas = dinas.idDinas;
  const id = dinas.idDinas;
  const nama = dinas.namaDinas;
  const username = dinas.usernameDinas;
  const nomorTelepon = dinas.nomorTelepon;
  const alamat = dinas.alamatDinas;
    res.status(200).json({ id, nama, username, nomorTelepon, alamat });
};

export const MeDinas = async (req, res) => {
  if (!req.session.idDinas) {
    return res.status(401).json({ msg: "Anda belum login" });
  }
  const dinas = await Dinas.findOne({
    attributes: [
      "idDinas",
      "namaDinas",
      "usernameDinas",
      "nomorTelepon",
      "alamatDinas",
    ],
    where: {
      idDinas: req.session.idDinas,
    },
  });
  if (!dinas) {
    return res.status(404).json({ msg: "Peternak tidak ditemukan" });
  }
  res.status(200).json(dinas);
};
