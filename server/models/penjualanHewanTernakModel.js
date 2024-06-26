import { Sequelize } from "sequelize";
import db from "../config/database.js";
import HewanTernak from "./hewanTernakModel.js";

const { DataTypes } = Sequelize;

const PenjualanHewanTernak = db.define(
  "PenjualanHewanTernak",
  {
    idPenjualan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idHewanTernak: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tanggalPenjualan: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
  },
  {
    tableName: "penjualanhewanternak",
    timestamps: false,
  }
);
PenjualanHewanTernak.belongsTo(HewanTernak, { foreignKey: "idHewanTernak" });
export default PenjualanHewanTernak;

(async () => {
  await db.sync();
})();
