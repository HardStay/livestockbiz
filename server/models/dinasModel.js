import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Dinas = db.define(
  "dinas",
  {
    idDinas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    usernameDinas: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    passwordDinas: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    namaDinas: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    alamatDinas: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    nomorTelepon: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  },
  {
    tableName: "dinas",
    timestamps: false,
  }
);

export default Dinas;

(async () => {
  await db.sync();
})();
