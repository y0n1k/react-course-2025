import {useEffect, useState} from "react";
import {getRecipesByTag} from "../../services/api.service.ts";
import {useParams} from "react-router-dom";
import {IRecipe} from "../../models/recipe/IRecipe.ts";
import RecipeComponent from "./RecipeComponent.tsx";

const RecipesByTagComponent= () => {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const {tag} = useParams<{tag:string}>()
        useEffect( () => {
            console.log('Current Tag:', tag);
        if (tag) {
            getRecipesByTag(tag)
                .then(value => {
                    console.log(value.recipes);
                    console.log(value)
                    setRecipes(value.recipes)
                })
        } else {
            console.log('tag does not exist')
        }
    }, [tag])

    return (
        <div>
            {
                recipes.map(recipe => <RecipeComponent key={recipe.id} item={recipe}/>)
            }
        </div>
    );
};

export default RecipesByTagComponent;