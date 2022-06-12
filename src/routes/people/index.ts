import express from "express";
import {getPeople, postPeople} from "../../controllers/people";

const peopleRouter = express.Router();

peopleRouter.get("/", getPeople);
peopleRouter.post("/", postPeople);

export default peopleRouter;
