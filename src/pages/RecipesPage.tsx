import RecipesComponent from "../components/recipes/RecipesComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";
import RecipeSearchComponent from "../components/recipes/RecipeSearchComponent.tsx";
import SearchedRecipesComponent from "../components/recipes/SearchedRecipesComponent.tsx";

const RecipesPage = () => {

    return (
        <div>
            recipes page
            <RecipeSearchComponent/>
            <SearchedRecipesComponent/>
            <RecipesComponent />
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;