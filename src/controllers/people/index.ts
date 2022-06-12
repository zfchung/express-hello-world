import {Response, Request} from "express";
import {people} from "../../data";

export function getPeople(req: Request, res: Response) {
    res.status(200).json({
        success: true,
        data: people
    });
}

export function postPeople(req: Request, res: Response) {
    const {name} = req.body;
    if (!name) {
        return res
            .status(400)
            .json({success: false, msg: 'Please provide name value'});
    }
    res.status(201).json({success: true, person: name});
}

export function putPeople(req: Request, res: Response) {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({success: false, msg: `no person with id ${id}`});
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person;
    });

    res.status(200).json({success: true, data: newPeople});
}

