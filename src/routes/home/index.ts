import express from "express";
import {homeController} from "../../controllers/home";

const homeRouter = express.Router();

homeRouter.get('/', homeController);

export default homeRouter;
