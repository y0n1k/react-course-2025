import * as Joi from "joi";

export const NameValidator = Joi.object({
    name: Joi.string()
})