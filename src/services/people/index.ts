import {people} from "../../data/people"

interface IPeople {
    id: number;
    name: string;
}

export function getPeopleData(): IPeople[]{
    return people;
}
