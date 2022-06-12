import express from "express";
import {about} from "../controllers/about";
export const aboutRouter = express.Router();

aboutRouter.get('/', about );
