import { User } from "./user";

export interface Post {

    id: number;
    user: User;
    urlResource: string;
    title: string;
    date: Date;

}