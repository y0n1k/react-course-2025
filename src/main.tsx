import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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