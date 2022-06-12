import express from "express";
import {aboutController} from "../../controllers/about";

const aboutRouter = express.Router();

aboutRouter.get('/', aboutController);
aboutRouter.post('/',);

export default aboutRouter;
