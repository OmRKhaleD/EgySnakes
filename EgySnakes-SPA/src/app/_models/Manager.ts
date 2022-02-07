import { City } from "./City";
import { Town } from "./Town";
import { User } from "./User";

export interface Manager {
    id: number;
    city: City;
    town: Town;
    avilable: Date;
    jobTybe: string;
    drugs: string;
    salary: number;
    user: User;
}
