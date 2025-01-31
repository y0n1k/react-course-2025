import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import RecipePage from "../pages/RecipePage.tsx";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {path: '/users', element: <UsersPage/>},
            {path: '/user-details/:userId', element: <UserPage/>},
            {path: '/recipe-details/:userId', element: <RecipePage/>},
            {path: '/recipes', element: <RecipesPage/>},
        ]
    },
])