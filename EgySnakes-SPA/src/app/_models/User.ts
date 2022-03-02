import { City } from "./City";
import { Manager } from "./Manager";
import { SocialLinks } from "./SocialLinks";
import { Town } from "./Town";
import { Photo } from "./Photo";

export interface User {
    id: number;
    username: string;
    fullName: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photo: Photo;
    city: City;
    town: Town;
    nationalId: number;
    socialLinks: SocialLinks;
    birthday: Date;
    managers: Manager;
    phone: number;
    cityId: number;
    townId: number;
}
