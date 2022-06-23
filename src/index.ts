import express from 'express';

export default express()
    .use(express.urlencoded({extended: false}))
    .use(express.json());

