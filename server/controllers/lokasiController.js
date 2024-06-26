import Lokasi from "../models/lokasiModel.js";

export const getLokasi = async (req, res) => {
  try {
    const response = await Lokasi.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const getLokasiById = async (req, res) => {
  try {
    const response = await Lokasi.findOne({
      where: {
        idLokasi: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const createLokasi = async (req, res) => {
  try {
    await Lokasi.create(req.body);
    res.status(201).json({ msg: "Lokasi Created" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateLokasi = async (req, res) => {
  try {
    await Lokasi.update(req.body, {
      where: {
        idLokasi: req.params.id,
      },
    });
    res.status(200).json({ msg: "Lokasi Updated" });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteLokasi = async (req, res) => {
  try {
    await Lokasi.destroy({
      where: {
        idLokasi: req.params.id,
      },
    });
    res.status(200).json({ msg: "Lokasi Deleted" });
  } catch (error) {
    console.error(error.message);
  }
};
