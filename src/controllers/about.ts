import express from "express";

export function about(req: express.Request, res: express.Response) {
    res.send(`About this wiki`);
}
