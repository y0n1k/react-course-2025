import {useEffect} from "react";
import {useParams} from "react-router-dom";
import RecipeComponent from "./RecipeComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {recipeSliceActions} from "../../redux/slices/recipe/recipeSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";

const RecipesByTagComponent= () => {

    // const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const {tag} = useParams<{tag:string}>()

    const {recipesTag} = useAppSelector(({recipeSlice}) => recipeSlice)
    const dispatch = useAppDispatch()

        useEffect( () => {
            console.log('Current Tag:', tag);
        if (tag) {
            const response = dispatch(recipeSliceActions.getRecipesByTagRedux(tag))
            console.log(response);
            console.log(recipesTag);
            console.log(typeof recipesTag);
            // getRecipesByTag(tag)
            //     .then(value => {
            //         console.log(value.recipes);
            //         console.log(value)
            //         setRecipes(value.recipes)
            //     })
        } else {
            console.log('tag does not exist')
        }
    }, [tag])

    return (
        <div>
            {
                recipesTag?.recipes.map(recipe => <RecipeComponent key={recipe.id} item={recipe}/>)
            }
        </div>
    );
};

export default RecipesByTagComponent;