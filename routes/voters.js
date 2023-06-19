// const express = require("express");
// const Router = express.Router();
const { Router } = require("express");
const votersRouter = Router();
const voters = require("../controllers/voters");

votersRouter.post("/", voters.createVoterFunction);
votersRouter.get("/", voters.getAllVotersFunction);
votersRouter.get("/:id", voters.getVotersByIdFunction);
votersRouter.delete("/", voters.deleteVoterFunction);
votersRouter.patch("/", voters.updateVoterFunction);
module.exports = votersRouter;
