import {IUser} from "../models/user/IUser.ts";
import {IRecipe} from "../models/recipe/IRecipe.ts";


export const getUsers = async (page: string): Promise<{ users: IUser[] }> => {
    return await fetch('https://dummyjson.com/users?skip=' + page)
        .then(value => value.json())
}

export const getUserById = async (id: string): Promise<IUser> => {
    return await fetch('https://dummyjson.com/users/' + id)
        .then(response => response.json());
};

export const getRecipesByName = async (name: string): Promise<{ recipes: IRecipe[] }> => {
    return await fetch('https://dummyjson.com/recipes/search?q=' + name)
        .then(value => value.json())
}
export const getRecipesByTag = async (tag: string): Promise<{ recipes: IRecipe[] }> => {
    return await fetch('https://dummyjson.com/recipes/tag/' + tag)
        .then(value => value.json())
}

export const getRecipesById = async (id: string): Promise<IRecipe> => {
    return await fetch('https://dummyjson.com/recipes/' + id)
        .then(value => value.json())
}

export const getRecipes = async (page: string): Promise<{ recipes: IRecipe[] }> => {
    return await fetch('https://dummyjson.com/recipes?skip=' + page)
        .then(value => value.json())
}

export const getRecipesByUserId = async (userId: string): Promise<IRecipe[]> => {
    return await fetch('https://dummyjson.com/recipes?userId=' + userId)
        .then(value => value.json())
}