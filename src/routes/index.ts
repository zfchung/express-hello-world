import express from "express";
import homeRouter from "./home";
import aboutRouter from "./about";

const router = express.Router();

router.use("/home", homeRouter);
router.use("/about", aboutRouter);

export default router;
