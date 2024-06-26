import Peternak from "../models/peternakModel.js";

export const getPeternak = async (req, res) => {
  try {
    const response = await Peternak.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const getPeternakById = async (req, res) => {
  try {
    const response = await Peternak.findOne({
      where: {
        idPeternak: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const createPeternak = async (req, res) => {
  try {
    await Peternak.create(req.body);
    res.status(201).json({ msg: "Peternak Created" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePeternak = async (req, res) => {
  try {
    await Peternak.update(req.body, {
      where: {
        idPeternak: req.params.id,
      },
    });
    res.status(200).json({ msg: "Peternak Updated" });
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePeternak = async (req, res) => {
  try {
    await Peternak.destroy({
      where: {
        idPeternak: req.params.id,
      },
    });
    res.status(200).json({ msg: "Peternak Deleted" });
  } catch (error) {
    console.error(error.message);
  }
};
