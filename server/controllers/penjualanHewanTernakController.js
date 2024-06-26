import PenjualanHewanTernak from "../models/penjualanHewanTernakModel.js";
import HewanTernak from "../models/hewanTernakModel.js";
import { Sequelize } from "sequelize";

export const getPenjualanHewanTernak = async (req, res) => {
  try {
    const response = await PenjualanHewanTernak.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const getJumlahHewanTerjual = async () => {
  try {
    const response = await PenjualanHewanTernak.findAll({
      attributes: [
        [Sequelize.fn("date", Sequelize.col("tanggalPenjualan")), "tanggal"],
        [Sequelize.fn("count", Sequelize.col("idPenjualan")), "jumlahTerjual"],
      ],
      group: [Sequelize.fn("date", Sequelize.col("tanggalPenjualan"))],
      order: [[Sequelize.fn("date", Sequelize.col("tanggalPenjualan")), "ASC"]],
    });

    if (response.length > 0) {
      return response;
    } else {
      throw new Error("Data tidak ditemukan");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getPenjualanHewanTernakPerBulan = async (req,res) => {
  try {
    const { tahun } = req.params;
    const result = await PenjualanHewanTernak.findAll({
      attributes: [
        [
          Sequelize.literal("DATE_FORMAT(tanggalPenjualan, '%Y')"),
          "Tahun"
        ],
        [
          Sequelize.literal("DATE_FORMAT(tanggalPenjualan, '%M')"),
          "Bulan"
        ],
        [Sequelize.col("HewanTernak.jenisHewan"), "jenisHewan"],
        [
          Sequelize.fn("COUNT", Sequelize.col("idPenjualan")),
          "JumlahHewanTerjual"
        ],
      ],
      include: [
        {
          model: HewanTernak,
          attributes: [],
          required: true, // INNER JOIN
        },
      ],
      where: Sequelize.literal(`YEAR(tanggalPenjualan) = ${tahun}`), // Filter berdasarkan tahun
      group: [
        Sequelize.literal("Tahun"),
        Sequelize.literal("Bulan"),
        "jenisHewan"
      ],
      order: [
        Sequelize.literal("tanggalPenjualan"),
        "jenisHewan"
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export const getPenjualanByJenisHewan = async (jenisHewan) => {
  try {
    const response = await PenjualanHewanTernak.findAll({
      attributes: ["harga", "tanggalPenjualan"],
      include: [
        {
          model: HewanTernak,
          attributes: [],
          where: { jenisHewan: jenisHewan },
        },
      ],
    });

    if (response.length > 0) {
      return response;
    } else {
      throw new Error("Data tidak ditemukan");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getPenjualanHewanTernakById = async (req, res) => {
  try {
    const response = await PenjualanHewanTernak.findOne({
      where: {
        idPenjualan: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const createPenjualanHewanTernak = async (req, res) => {
  try {
    await PenjualanHewanTernak.create(req.body);
    res.status(201).json({ msg: "PenjualanHewanTernak Created" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePenjualanHewanTernak = async (req, res) => {
  try {
    await PenjualanHewanTernak.update(req.body, {
      where: {
        idPenjualan: req.params.id,
      },
    });
    res.status(200).json({ msg: "PenjualanHewanTernak Updated" });
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePenjualanHewanTernak = async (req, res) => {
  try {
    await PenjualanHewanTernak.destroy({
      where: {
        idPenjualan: req.params.id,
      },
    });
    res.status(200).json({ msg: "PenjualanHewanTernak Deleted" });
  } catch (error) {
    console.error(error.message);
  }
};
