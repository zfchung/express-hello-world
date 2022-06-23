import app from './index';
import router from "./routes";

const defaultPortNumber = 3000;
const port = Number(process.env.PORT || defaultPortNumber);

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}......`);
});
