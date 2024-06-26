import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Peternak from "./peternakModel.js";
import Lokasi from "./lokasiModel.js";

const { DataTypes } = Sequelize;

const HewanTernak = db.define(
  "HewanTernak",
  {
    idHewanTernak: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    jenisHewan: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    famili: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    berat: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    jenisKelamin: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    usia: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vaksin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    idPeternak: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idLokasi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    waktuPerubahan: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "hewanternak",
    timestamps: false,
  }
);
HewanTernak.belongsTo(Peternak, { foreignKey: "idPeternak" });
HewanTernak.belongsTo(Lokasi, { foreignKey: "idLokasi" });
export default HewanTernak;

(async () => {
  await db.sync();
})();
