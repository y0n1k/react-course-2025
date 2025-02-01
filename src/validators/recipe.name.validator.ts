import * as Joi from "joi";

export const recipeNameValidator = Joi.object({
    name: Joi.string().required()
})