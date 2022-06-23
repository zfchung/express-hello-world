import app from './index';
import router from "./routes";

const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}......`);
});
