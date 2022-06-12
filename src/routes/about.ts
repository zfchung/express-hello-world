import express from "express";
import {about} from "../controllers/about";

const aboutRouter = express.Router();

aboutRouter.get('/', about);
aboutRouter.post('/',);

export default aboutRouter;
