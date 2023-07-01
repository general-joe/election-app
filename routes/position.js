const { Router } = require("express");
const positionsRouter = Router();

// const express = require("express");
// // const Router = express.Router();
// // const { Router } = require(express);
// const positionsRouter = express.Router();
const positions = require("../controllers/positions");

positionsRouter.post("/", positions.createPositionFunction);
positionsRouter.get("/", positions.getAllPositionFunction);
positionsRouter.get("/:id", positions.getPositionByIdFunction);
positionsRouter.delete("/:id", positions.deletePostionFunction);
positionsRouter.patch("/:id", positions.updatePositionFunction);
module.exports = positionsRouter;
