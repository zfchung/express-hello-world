import {Response, Request} from "express";

export function about(req: Request, res: Response) {
    res.json(`About this wiki`);
}
