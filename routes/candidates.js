// const express = require("express");
// const Router = express.Router()
const { Router } = require("express");
const candidateRouter = Router();
const candidate = require("../controllers/candidates");

candidateRouter.post("/", candidate.createCandidateFunction);
candidateRouter.get("/:positionId", candidate.getCandidateByPositionIdFunction);
candidateRouter.get("/:id", candidate.getSingleCandidateFunction);
candidateRouter.delete("/:id", candidate.deletedCandidateFunction);
candidateRouter.patch("/:id", candidate.updateCandidateFunction);
module.exports = candidateRouter;
