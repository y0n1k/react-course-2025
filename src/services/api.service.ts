import {IUser} from "../models/user/IUser.ts";
import {IRecipe} from "../models/recipe/IRecipe.ts";

export const getRecipes = async ():Promise<{recipes:IRecipe[]}> => {
    return await fetch('https://dummyjson.com/recipes')
        .then(value => value.json())
}

export const getUsers = async (page:string):Promise<{users:IUser[]}> => {
    return await fetch('https://dummyjson.com/users?skip='+page)
        .then(value => value.json())
}

export const getUserById = async (id: string): Promise<IUser> => {
    return await fetch('https://dummyjson.com/users/'+id)
        .then(response => response.json());
};