import express from "express";
import pollController from "../controller/poll.controller.js";

const pollRouter = express.Router();

pollRouter.route("/:roomId").get(pollController.get);
pollRouter.route("/results/:roomId").get(pollController.getAll)
export default pollRouter;