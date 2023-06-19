const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createPositionFunction = async (req, res, next) => {
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

const getAllPositionFunction = async (req, res, next) => {
  try {
    const data = req.body;
    const positions = await prisma.positions.findMany({
      data,
    });
    res.status(201).json({
      positions,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPositionByIdFunction = async (req, res, next) => {
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
const updatePositionFunction = async (res, req, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
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
const deletePostionFunction = async (req, res, next) => {
  const id = req.params.id;
  try {
    const positions = await prisma.positions.delete({
      where: {
        id,
      },
    });
    res.status(404).json(positions, {
      message: "Voter's positon has been successfully deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllPositionFunction,
  getPositionByIdFunction,
  createPositionFunction,
  updatePositionFunction,
  deletePostionFunction,
};
