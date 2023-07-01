// const express = require("express");
// const Router = express.Router();
const { Router } = require("express");
const votersRouter = Router();
const voters = require("../controllers/voters");

votersRouter.post("/", voters.createVoterFunction);
votersRouter.get("/", voters.getAllVotersFunction);
votersRouter.get("/:studentId", voters.getVotersByIdFunction);
votersRouter.delete("/:studentId", voters.deleteVoterFunction);
votersRouter.patch("/:studentId", voters.updateVoterFunction);
module.exports = votersRouter;
