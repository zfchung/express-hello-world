import {Response, Request} from "express";

export function aboutController(req: Request, res: Response) {
    res.json(`About this wiki`);
}
