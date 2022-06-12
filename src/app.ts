import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send(`<h1>resource not found</h1>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use for middleware
// app.listen
