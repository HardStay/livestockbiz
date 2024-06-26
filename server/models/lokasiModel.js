import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Lokasi = db.define(
  "Lokasi",
  {
    idLokasi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    namaJalan: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    namaKabupaten: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    namaProvinsi: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    kodePos: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  },
  {
    tableName: "lokasi",
    timestamps: false,
  }
);

export default Lokasi;

(async () => {
  await db.sync();
})();
