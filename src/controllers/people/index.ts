import {Response, Request} from "express";
import {people} from "../../data";

export function peopleController(req: Request, res: Response){
    res.status(200).json({
        success: true,
        data: people
    });
}
