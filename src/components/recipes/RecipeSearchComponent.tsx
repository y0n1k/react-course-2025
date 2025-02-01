import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {recipeNameValidator} from "../../validators/recipe.name.validator.ts";
import RecipeComponent from "./RecipeComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx"
import {recipeSliceActions} from "../../redux/slices/recipe/recipeSlice.ts";
// import {getRecipesByName} from "../../services/api.service.ts";
import {useEffect} from "react";
// import { useState} from "react";
// import {IRecipe} from "../../models/recipe/IRecipe.ts";
// import {IRecipe} from "../../models/recipe/IRecipe.ts";
// import {useState} from "react";

type IFormProps = {
    name: string
}

const RecipeSearchComponent = () => {
    // const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const {recipes} = useAppSelector(({recipeSlice}) => recipeSlice);
    const dispatch = useAppDispatch();

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver(recipeNameValidator)
    });

    const onSubmit = async (formDataProps: IFormProps) => {
        console.log(formDataProps);
        const name = formDataProps.name;
        dispatch(recipeSliceActions.getRecipesByNameRedux(name))
        // const response = await getRecipesByName(name);
        // setRecipes(response.recipes);
        // console.log(response.recipes);
    };

    useEffect(() => {

    }, []);

    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Пошук
                    <input type={"text"} {...register('name')} placeholder={"Введіть назва рецепта"}/>
                    {errors.name && <div>{errors.name.message}</div>}
                </label>
                <button disabled={!isValid}>Надіслати</button>
            </form>
            <hr/>
            <div>
                {recipes.length > 0 ? (
                    recipes.map(recipe => <RecipeComponent key={recipe.id} item={recipe}/>)
                ) : (
                    <p>Нічого не знайдено</p>
                )}
            </div>
        </div>
    );
};

export default RecipeSearchComponent;