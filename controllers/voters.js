const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createVoterFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const voters = await prisma.voters.create({
      data,
    });
    res.status(201).json({
      voters,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getAllVotersFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const voters = await prisma.voters.findMany({
      data,
    });
    res.status(201).json({
      voters,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getVotersByIdFunction = async (req, res, next) => {
  try {
    const studentId = req.params.studentId;
    const voters = await prisma.voters.findUnique({
      where: {
        studentId,
      },
    });
    res.status(200).json({
      voters,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
const updateVoterFunction = async (res, req, next) => {
  try {
    const studentId = req.params.studentId;
    const data = req.body;
    const voters = await prisma.voters.update({
      where: {
        studentId,
      },
      data,
    });
    res.status(201).json({
      voters,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
const deleteVoterFunction = async (req, res, next) => {
  const studentId = req.params.studentId;
  try {
    const voters = await prisma.voters.delete({
      where: {
        studentId,
      },
    });
    res
      .status(404)
      .json(voters, { message: "Voter has been successfully deleted" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllVotersFunction,
  getVotersByIdFunction,
  createVoterFunction,
  updateVoterFunction,
  deleteVoterFunction,
};
