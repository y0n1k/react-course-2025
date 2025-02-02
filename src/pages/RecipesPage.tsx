// import RecipesComponent from "../components/recipes/RecipesComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";
import RecipeSearchComponent from "../components/recipes/RecipeSearchComponent.tsx";
// import SearchedRecipesComponent from "../components/recipes/SearchedRecipesComponent.tsx";
import {Outlet} from "react-router-dom";

const RecipesPage = () => {

    return (
        <div>
            <RecipeSearchComponent/>
            <Outlet/>
            {/*<RecipesComponent />*/}
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;