const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const CreateCandidateFunction = async (req, res, next) => {
  try {
    const data = req.body;
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
    res.status(200).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCandidateByPositionId = async (req, res, next) => {
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

const updateByPositionId = async (req, res, next) => {
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

const getAllCandidates = async (req, res, next) => {
  try {
    const author = await prisma.candidates.findMany();
    res.status(200).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  CreateCandidateFunction,
  updateCandidateFunction,
  deletedCandidateFunction,
  getCandidateByPositionId,
  updateByPositionId,
  getAllCandidates,
};
