const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllVoters = async (req, res, next) => {
  try {
    const id = req.params.id;
    const candidates = await prisma.candidates.findMany({
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

const getVotersById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const voters = await prisma.voters.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      voters,
    });
  } catch (error) {
    console.log(error);
  }
};

const CreateVotersFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const voters = await prisma.voters.create({
      data,
    });
    res.status(201).json({
      voters,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateVotersFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const voters = await prisma.voters.update({
      where: {
        id,
      },
      data,
    });
    res.status(201).json({
      voters,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletedVotersFunction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const voters = await prisma.voters.delete({
      where: {
        id,
      },
    });
    res.status(200).json({
      voters,
    });
  } catch (error) {
    console.log(error);
  }
};

const getVotersByPositionId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const voters = await prisma.voters.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      voters,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVotersById,
  getAllVoters,
  getVotersByPositionId,
  CreateVotersFunction,
  updateVotersFunction,
};
