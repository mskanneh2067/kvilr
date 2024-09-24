import Solution from "../models/Solution.js";

//CREATE
export const createSolution = async (req, res, next) => {
  const newSolution = new Solution(req.body);

  try {
    const saveSolution = await newSolution.save();
    res.status(200).json(saveSolution);
  } catch (err) {
    next(err);
  }
};

//GET CITIES

export const getSolutions = async (req, res, next) => {
  try {
    const solutions = await Solution.find();
    res.status(200).json(solutions);
  } catch (err) {
    next(err);
  }
};
