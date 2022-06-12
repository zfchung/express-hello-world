import {Response, Request} from "express";
import {people} from "../../data";

export function getPeople(req: Request, res: Response) {
    res.status(200).json({
        success: true,
        data: people
    });
}

export function postPeople(req: Request, res: Response) {
    const {name} = req.body
    if (!name) {
        return res
            .status(400)
            .json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).json({success: true, person: name})
}

