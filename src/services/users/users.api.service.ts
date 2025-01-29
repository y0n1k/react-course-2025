import {IUser} from "../../models/user/IUser.ts";

export const getUsers = async ():Promise<{users:IUser[]}> => {
    return await fetch('https://dummyjson.com/users')
        .then(value => value.json())
}