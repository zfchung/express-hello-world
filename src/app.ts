import express from "express";
import router from "./routes";

// TODO: create this app in a separate file
// TODO: this app.ts is only concern about how to run it
// More testable when we do supertest
const app = express();

// TODO: ideally we maintain port in a config/env variable and only use hard code when no port found (fallback)
const port = 3000;

// TODO: These middlewares can be considered if they are required in the app creation or during business logic
// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());


app.use(router);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}......`);
});
