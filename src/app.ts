import express from "express";
import router from "./routes";

const app = express();
const port = 3000;

// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}......`);
});
