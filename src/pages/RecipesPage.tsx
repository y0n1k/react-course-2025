import RecipesComponent from "../components/recipes/RecipesComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";
import RecipeSearchComponent from "../components/recipes/RecipeSearchComponent.tsx";

const RecipesPage = () => {
    return (
        <div>
            recipes page
            <RecipeSearchComponent/>
            <RecipesComponent />
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;