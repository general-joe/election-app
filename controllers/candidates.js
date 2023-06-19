const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCandidateFunction = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const candidates = await prisma.candidates.create({
      data,
    });
    res.status(201).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCandidateFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const candidates = await prisma.candidates.update({
      where: {
        id,
      },
      data,
    });
    res.status(201).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletedCandidateFunction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const candidates = await prisma.candidates.delete({
      where: {
        id,
      },
    });
    res
      .status(404)
      .json(candidate, { message: "Candidate has been successfully deleted " });
  } catch (error) {
    console.log(error);
  }
};

const getCandidateByPositionIdFunction = async (req, res, next) => {
  try {
    const id = req.params.positionId;
    const candidates = await prisma.candidates.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleCandidateFunction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const candidates = await prisma.candidates.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCandidateFunction,
  updateCandidateFunction,
  deletedCandidateFunction,
  getCandidateByPositionIdFunction,
  getSingleCandidateFunction,
};
