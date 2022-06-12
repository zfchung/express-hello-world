import express from "express";

export function home(req: express.Request, res: express.Response) {
    res.send(`Home page`);
}
