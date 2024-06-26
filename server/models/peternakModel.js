import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Lokasi from "./lokasiModel.js";

const { DataTypes } = Sequelize;

const Peternak = db.define(
  "Peternak",
  {
    idPeternak: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    usernamePeternak: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    passwordPeternak: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    namaPeternak: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    nomorTelepon: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  },
  {
    tableName: "peternak",
    timestamps: false,
  }
);
Peternak.belongsTo(Lokasi, { foreignKey: "idLokasi" });
export default Peternak;

(async () => {
  await db.sync();
})();
