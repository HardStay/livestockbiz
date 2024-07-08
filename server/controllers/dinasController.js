import Dinas from "../models/dinasModel.js";
import bcrypt from "bcrypt";

export const getDinas = async (req, res) => {
  try {
    const response = await Dinas.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const getDinasById = async (req, res) => {
  try {
    const response = await Dinas.findOne({
      where: {
        idDinas: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const createDinas = async (req, res) => {
  const { namaDinas, username, password, nomorTelepon, alamat } = req.body;
  const hashPassword = await bcrypt.hash(password,10);
  try {
    await Dinas.create({
      usernameDinas: username,
      passwordDinas: hashPassword,
      namaDinas: namaDinas,
      alamatDinas: alamat,
      nomorTelepon: nomorTelepon,
    });
    res.status(201).json({ msg: "Dinas Created" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateDinas = async (req, res) => {
  try {
    const dinas = await Dinas.findOne({
      where: {
        idDinas: req.params.id,
      },
    });
    if (!dinas) {
      return res.status(404).json({ msg: "Dinas tidak ditemukan" });
    }
    const { namaDinas, username, password, nomorTelepon, alamat } = req.body;
    let hashPassword;

    if (password === "" || password === null || password === undefined) {
      hashPassword = dinas.passwordDinas;
    } else {
      console.log("Password received for hashing:", password);
      hashPassword = await bcrypt.hash(password,10);
    }

    await Dinas.update(
      {
        usernameDinas: username,
        passwordDinas: hashPassword,
        namaDinas: namaDinas,
        alamatDinas: alamat,
        nomorTelepon: nomorTelepon,
      },
      {
        where: {
          idDinas: dinas.idDinas,
        },
      }
    );
    res.status(200).json({ msg: "Dinas Updated" });
  } catch (error) {
    console.error("Error updating dinas:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const deleteDinas = async (req, res) => {
  const dinas = await Dinas.findOne({
    where: {
      idDinas: req.params.id,
    },
  });
  if (!dinas) {
    return res.status(404).json({ msg: "Dinas tidak ditemukan" });
  }
  try {
    await Dinas.destroy({
      where: {
        idDinas: dinas.idDinas,
      },
    });
    res.status(200).json({ msg: "Dinas Deleted" });
  } catch (error) {
    console.error(error.message);
  }
};
