import RecipesComponent from "../components/recipes/RecipesComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";

const RecipesPage = () => {
    return (
        <div>
            recipes page
            <RecipesComponent />
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;