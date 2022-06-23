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
    // TODO: More robust data validation
    // TODO: There are different data validation; Consider whether the validation can be done earlier before it reaches here.
    // Is there an email? - Middleware
    // Is the email in a valid format? - Middleware
    // Controllers generally does not do any data validation at all....?
    // Does the email already exist in database? - Business
    if (!name) {
        return res
            .status(400)
            // TODO: The status code that you chose should be the best representation whether your call is success or not. You should not duplicate and cause inconsistency in the json body
            // TODO: Ideally you don't just send a human readable code to front end (your machine). But this human readable reason is not consumable by the machine. We should be enumerating the a language/code that the front end can always understand the error. Imagine when our front end application is changing from english to mandarin.
            // TODO: Consider an entire language service just to translate error code coming from backend to display appropriate information to the user.
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

export function deletePeople(req: Request, res: Response){
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(id)
    )
    return res.status(200).json({ success: true, data: newPeople });
}
