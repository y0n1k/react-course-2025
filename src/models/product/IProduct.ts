import {IReactions} from "./IReactions.ts";

export interface IProduct {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: IReactions;
	views: number;
	userId: number;
}