import express from "express";
import {homeRouter} from "./routes/home";
import {aboutRouter} from "./routes/about";

const app = express();
const port = 3000;

// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

app.use("/home", homeRouter);
app.use("/about", aboutRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}......`);
});
