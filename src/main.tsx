import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";

const router = createBrowserRouter( [
    {
        path:'/', element:<MainLayout/>,
        children: [
            {path:'posts', element:<PostsPage/>},
            {path:'users', element:<UsersPage/>}
        ]
    }
])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
