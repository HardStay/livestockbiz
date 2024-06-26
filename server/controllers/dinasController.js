import Dinas from "../models/dinasModel.js";

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
  try {
    await Dinas.create(req.body);
    res.status(201).json({ msg: "Dinas Created" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateDinas = async (req, res) => {
  try {
    await Dinas.update(req.body, {
      where: {
        idDinas: req.params.id,
      },
    });
    res.status(200).json({ msg: "Dinas Updated" });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteDinas = async (req, res) => {
    try {
      await Dinas.destroy({
        where: {
          idDinas: req.params.id,
        },
      });
      res.status(200).json({ msg: "Dinas Deleted" });
    } catch (error) {
      console.error(error.message);
    }
  };
