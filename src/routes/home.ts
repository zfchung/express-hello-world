import express from "express";
import {home} from "../controllers/home";
export const homeRouter = express.Router();

homeRouter.get('/', home );

