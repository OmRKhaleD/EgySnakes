import { City } from "./City";
import { Town } from "./Town";
import { User } from "./User";

export interface Manager {
    id: number;
    city: City;
    town: Town;
    avilableDate: Date;
    jobType: string;
    drugs: string;
    salary: number;
    user: User;
    cityId: number;
    townId: number;
}
