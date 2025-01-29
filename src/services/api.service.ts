import {IPost} from "../models/post/IPost.ts";
import {IUser} from "../models/user/IUser.ts";

export const getPosts = async ():Promise<{posts:IPost[]}> => {
    return await fetch('https://dummyjson.com/posts')
        .then(value => value.json())
}

export const getUsers = async ():Promise<{users:IUser[]}> => {
    return await fetch('https://dummyjson.com/users')
        .then(value => value.json())
}