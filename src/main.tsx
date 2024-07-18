import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout/Layout.tsx";
import Main from "./pages/Main/Main.tsx";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import RequireAuth from "./helpers/RequireAuth.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import Error from "./pages/Error/Error.tsx";
import Auto from "./pages/Auto/Auto.tsx";
import AutoAdd from "./pages/AutoAdd/AutoAdd.tsx";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <RequireAuth><MainLayout /></RequireAuth>,
                children: [
                    {
                        path: '/',
                        element: <Main />
                    },
                    {
                        path: '/auto',
                        element: <Auto />
                    },
                    {
                        path: '/add',
                        element: <AutoAdd />
                    }
                ]
            },
            {
                path: '/auth',
                element: <Auth />
            },
            {
                path: '/error',
                element: <Error />
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
