import express from "express";
import {getPeople, postPeople, putPeople} from "../../controllers/people";

const peopleRouter = express.Router();

peopleRouter.get("/", getPeople);
peopleRouter.post("/", postPeople);
peopleRouter.put("/:id", putPeople);

export default peopleRouter;
