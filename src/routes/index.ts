import express from "express";
import homeRouter from "./home";
import aboutRouter from "./about";
import peopleRouter from "./people";

const router = express.Router();

router.use("/home", homeRouter);
router.use("/about", aboutRouter);
router.use("/people", peopleRouter);

export default router;
