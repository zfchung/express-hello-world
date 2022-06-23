import {Response, Request} from "express";
import {getPeopleData} from "../../services/people";
import {people} from "../../data";

export function getPeople(req: Request, res: Response) {
    res.status(200).json(getPeopleData());
}

export function postPeople(req: Request, res: Response) {
    const {name} = req.body;
    if (!name) {
        return res
            .status(400)
            .json({msg: 'Please provide name value'});
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
            .json({msg: `no person with id ${id}`});
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person;
    });

    res.status(200).json({data: newPeople});
}

export function deletePeople(req: Request, res: Response){
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({msg: `no person with id ${id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(id)
    )
    return res.status(200).json({data: newPeople });
}
