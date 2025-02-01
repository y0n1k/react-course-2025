import RecipesByTagComponent from "../components/recipes/RecipesByTagComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";

const RecipesByTagPage = () => {
    return (
        <div>
            this is recipe by tag page!
            <RecipesByTagComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default RecipesByTagPage;