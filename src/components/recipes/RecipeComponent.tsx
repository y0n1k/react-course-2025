import {Link} from "react-router-dom";
import {IRecipe} from "../../models/recipe/IRecipe.ts";
import RecipeTagsComponent from "./RecipeTagsComponent.tsx";

type RecipeComponentPropType = {
    item: IRecipe
}

const RecipeComponent = ({item}: RecipeComponentPropType) => {
    return (
        <div>
            <Link to={`/recipe-details/` + item.userId} state={item}>
                {item.id}. {item.name}
            </Link>
            <RecipeTagsComponent tags={item.tags}/>
        </div>
    );
};

export default RecipeComponent;