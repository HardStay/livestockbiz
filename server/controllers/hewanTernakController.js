import HewanTernak from "../models/hewanTernakModel.js";
import Lokasi from "../models/lokasiModel.js";
import { Sequelize, Op } from "sequelize";

export const getHewanTernak = async (req, res) => {
  try {
    const response = await HewanTernak.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const getHewanTernakByProvinsi = async (req, res) => {
  const { namaProvinsi } = req.body;

  try {
    const result = await HewanTernak.findAll({
      attributes: [
        "jenisHewan",
        [
          Sequelize.fn("COUNT", Sequelize.col("HewanTernak.idHewanTernak")),
          "jumlahHewan",
        ],
        [Sequelize.col("Lokasi.namaProvinsi"), "namaProvinsi"],
      ],
      include: [
        {
          model: Lokasi,
          attributes: [],
          where: {
            namaProvinsi: namaProvinsi,
          },
        },
      ],
      group: ["jenisHewan", "Lokasi.namaProvinsi"],
      order: [
        [Sequelize.literal("Lokasi.namaProvinsi"), "ASC"],
        ["jenisHewan", "ASC"],
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export const getHewanTernakByTahunAndJenis = async (req,res) => {
  try {
    const { tahun } = req.body;
    const { jenisHewan } = req.body;
    const result = await HewanTernak.findAll({
      attributes: [
        [
          Sequelize.literal("DATE_FORMAT(waktuPerubahan, '%Y')"),
          "Tahun"
        ],
        [
          Sequelize.literal("DATE_FORMAT(waktuPerubahan, '%M')"),
          "Bulan"
        ],
        "jenisHewan",
        [
          Sequelize.fn("COUNT", Sequelize.col("idHewanTernak")),
          "JumlahHewan"
        ],
      ],
      where: {
        jenisHewan: jenisHewan,
        [Op.and]: Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('waktuPerubahan')), tahun),
      },
      group: [
        Sequelize.literal("Tahun"),
        Sequelize.literal("Bulan"),
        "jenisHewan"
      ],
      order: [
        [Sequelize.literal("waktuPerubahan"), "ASC"],
        ["jenisHewan", "ASC"]
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export const getHewanTernakByTahun = async (req,res) => {
  try {
    const { tahun } = req.params;
    const result = await HewanTernak.findAll({
      attributes: [
        [
          Sequelize.literal("DATE_FORMAT(waktuPerubahan, '%Y')"),
          "Tahun"
        ],
        "jenisHewan",
        [
          Sequelize.fn("COUNT", Sequelize.col("idHewanTernak")),
          "JumlahHewan"
        ],
      ],
      where: Sequelize.literal(`DATE_FORMAT(waktuPerubahan, '%Y') = ${tahun}`),
      group: [
        Sequelize.literal("Tahun"),
        "jenisHewan"
      ],
      order: [
        [Sequelize.literal("waktuPerubahan"), "ASC"],
        ["jenisHewan", "ASC"]
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export const getHewanTernakById = async (req, res) => {
  try {
    const response = await HewanTernak.findOne({
      where: {
        idHewanTernak: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const createHewanTernak = async (req, res) => {
  try {
    await HewanTernak.create(req.body);
    res.status(201).json({ msg: "HewanTernak Created" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateHewanTernak = async (req, res) => {
  try {
    await HewanTernak.update(req.body, {
      where: {
        idHewanTernak: req.params.id,
      },
    });
    res.status(200).json({ msg: "HewanTernak Updated" });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteHewanTernak = async (req, res) => {
  try {
    await HewanTernak.destroy({
      where: {
        idHewanTernak: req.params.id,
      },
    });
    res.status(200).json({ msg: "HewanTernak Deleted" });
  } catch (error) {
    console.error(error.message);
  }
};
