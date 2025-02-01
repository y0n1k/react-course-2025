import {IUser} from "../user/IUser.ts";
import {IRecipe} from "../recipe/IRecipe.ts";

export interface IUsers {
	users: IUser[];
	total: number;
	skip: number;
	limit: number;
}

export interface IRecipes {
	recipes: IRecipe[];
	total: number;
	skip: number;
	limit: number;
}