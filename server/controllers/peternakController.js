import bcrypt from "bcrypt";
import Peternak from "../models/peternakModel.js";

export const getPeternak = async (req, res) => {
  try {
    const response = await Peternak.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const getPeternakById = async (req, res) => {
  try {
    const response = await Peternak.findOne({
      where: {
        idPeternak: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const createPeternak = async (req, res) => {
  const {idLokasi, namaLengkap, username, password, nomorTelepon } = req.body;
  const hashPassword = await bcrypt.hash(password,10);
  try {
    await Peternak.create({
      usernamePeternak: username,
      passwordPeternak: hashPassword,
      namaPeternak: namaLengkap,
      nomorTelepon: nomorTelepon,
      idLokasi: idLokasi,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePeternak = async (req, res) => {
  try {
    const peternak = await Peternak.findOne({
      where: {
        idPeternak: req.params.id,
      },
    });

    if (!peternak) {
      return res.status(404).json({ msg: 'Peternak tidak ditemukan' });
    }

    const { namaLengkap, username, password, nomorTelepon } = req.body;
    let hashPassword;

    if (password === "" || password === null || password === undefined) {
      hashPassword = peternak.passwordPeternak;
    } else {
      console.log("Password received for hashing:",password);
      hashPassword = await bcrypt.hash(password,10);
    }

    await Peternak.update(
      {
        usernamePeternak: username,
        passwordPeternak: hashPassword,
        namaPeternak: namaLengkap,
        nomorTelepon: nomorTelepon,
      },
      {
        where: {
          idPeternak: peternak.idPeternak,
        },
      }
    );
    res.status(200).json({ msg: "Peternak Updated" });
  } catch (error) {
    console.error("Error updating peternak:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const deletePeternak = async (req, res) => {
  const peternak = await Peternak.findOne({
    where: {
      idPeternak: req.params.id,
    },
  });
  if (!peternak) {
    return res.status(404).json({ msg: "Peternak tidak ditemukan" });
  }
  try {
    await Peternak.destroy({
      where: {
        idPeternak: peternak.idPeternak,
      },
    });
    res.status(200).json({ msg: "Peternak Deleted" });
  } catch (error) {
    console.error(error.message);
  }
};
