import { City } from "./City";
import { SocialLinks } from "./SocialLinks";
import { Town } from "./Town";

export interface User {
    id: number;
    username: string;
    fullname: string;
    age: number;
    gender: string;
    created: Date;
    lastactive: Date;
    photo: string;
    city: City;
    town: Town;
    nationalid: number;
    sociallinks: SocialLinks[];
}
