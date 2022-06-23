import {people} from "../../data";

interface IPeople {
    id: number;
    name: string;
}

export function getPeopleData(): IPeople[]{
    return people;
}
