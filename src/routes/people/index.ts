import express from "express";
import {deletePeople, getPeople, postPeople, putPeople} from "../../controllers/people";

const peopleRouter = express.Router();

peopleRouter.get("/", getPeople);
peopleRouter.post("/", postPeople);
peopleRouter.put("/:id", putPeople);
peopleRouter.delete("/:id", deletePeople);

export default peopleRouter;
