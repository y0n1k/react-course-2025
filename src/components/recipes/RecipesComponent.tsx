import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import RecipeComponent from "./RecipeComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {recipeSliceActions} from "../../redux/slices/recipe/recipeSlice.ts";

const RecipesComponent = () => {

    const [query] = useSearchParams();

    const {recipes} = useAppSelector(({recipeSlice}) => recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const skip = query.get('skip')
        if (skip) {
            const response = dispatch(recipeSliceActions.getRecipesRedux(skip));
            console.log(response)
        }
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