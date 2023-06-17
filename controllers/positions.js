const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPositions = async (req, res, next) => {
  try {
    const id = req.params.id;
    const positions = await prisma.positions.findMany({
      where: {
        id,
      },
    });
    res.status(200).json({
      positions,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPositionsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const positions = await prisma.positions.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      positions,
    });
  } catch (error) {
    console.log(error);
  }
};

const CreatePositionsFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const positions = await prisma.positions.create({
      data,
    });
    res.status(201).json({
      positions,
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePositionsFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const positions = await prisma.positions.update({
      where: {
        id,
      },
      data,
    });
    res.status(201).json({
      positions,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletedPositionsFunction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const positions = await prisma.positions.delete({
      where: {
        id,
      },
    });
    res.status(200).json({
      positions,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPositionsByPositionId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const positions = await prisma.positions.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      positions,
    });
  } catch (error) {
    console.log(error);
  }
};
