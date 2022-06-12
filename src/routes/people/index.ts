import express from "express";
import {peopleController} from "../../controllers/people";

const peopleRouter = express.Router();

peopleRouter.get("/", peopleController);

export default peopleRouter;
