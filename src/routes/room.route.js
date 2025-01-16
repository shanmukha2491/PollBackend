import express from "express";
import roomController from "../controller/room.Controller.js";

const roomRouter = express.Router();

roomRouter.route("/").post(roomController.create);

export default roomRouter;