import {useEffect, useState} from "react";
import {getRecipes} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";
import {IRecipe} from "../../models/recipe/IRecipe.ts";
import RecipeComponent from "./RecipeComponent.tsx";

const RecipesComponent = () => {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [query] = useSearchParams();
    useEffect( () => {
        const skip = query.get('skip')

            getRecipes(skip || '0')
                .then(value => {
                    setRecipes(value.recipes)
                })
        console.log(recipes)

    }, [query])

    return (
        <div>
            {
                recipes.map(recipe => <RecipeComponent key={recipe.id} item={recipe}/>)
            }
        </div>
    );
};

export default RecipesComponent;