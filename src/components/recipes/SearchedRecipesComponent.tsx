import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import RecipeComponent from "./RecipeComponent.tsx";
import {IRecipe} from "../../models/recipe/IRecipe.ts";


const SearchedRecipesComponent = () => {

    const {recipeName} = useAppSelector(({recipeSlice}) => recipeSlice);

    useEffect(() => {
        if (recipeName) {
            console.log(recipeName)
        }
    }, [recipeName]);


    return (
        <div>
            <hr/>
            <h3>Результати пошуку</h3>
            {
                recipeName?.recipes.map((recipe: IRecipe) => <RecipeComponent key={recipe.id} item={recipe}/>)

            }
            <hr/>
        </div>
    );
};

export default SearchedRecipesComponent;