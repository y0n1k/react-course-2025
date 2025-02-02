import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import RecipePage from "../pages/RecipePage.tsx";
import RecipesByTagPage from "../pages/RecipesByTagPage.tsx";
import SearchedRecipesComponent from "../components/recipes/SearchedRecipesComponent.tsx";
import SearchedUsersComponent from "../components/users/SearchedUsersComponent.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";
import RecipesComponent from "../components/recipes/RecipesComponent.tsx";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {path: '/users', element: <UsersPage/>, children: [
                    {path:'search-results', element: <SearchedUsersComponent/>},
                    {path:'all-users', element: <UsersComponent/>}
                ]},
            {path: '/user-details/:userId', element: <UserPage/>},
            {path: '/recipe-details/:userId', element: <RecipePage/>},
            {path: '/recipes', element: <RecipesPage/>, children: [
                    {path:'search-results', element: <SearchedRecipesComponent/>},
                    {path:'all-recipes', element: <RecipesComponent/>}
                ]},
            {path: '/recipes/tag/:tag', element: <RecipesByTagPage/>},
        ]
    },
])