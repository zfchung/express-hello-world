import {people} from "../../data/people"

interface IPeople {
    id: number;
    name: string;
}

export function getPeopleData(): IPeople[] {
    return people;
}

export function findPeople(name: string): IPeople | {} {
    const nameOfPersonEnquired = name.toLowerCase();
    const personEnquired = people.find(person => person.name.toLowerCase() === nameOfPersonEnquired);
    if (personEnquired) {
        return personEnquired;
    }
    return {};
}
