import {Request, Response} from "express";

export function home(req: Request, res: Response) {
    res.json(`Home page`);
}
