import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RequiredAuth from "./components/RequiredAuth"; //this is a custom component to protect routes that require authentication
import Secrets from "./pages/Secrets";
import SignUp from "./pages/SingUp";
import Success from "./pages/Success";
import Statements from "./pages/Statements";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },{
                 path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/secrets",
                element:(
                    <RequiredAuth>
                        <Secrets/>
                    </RequiredAuth>
                )  
            },
            {
                path:'/success',
                element: <Success/>
            },
            {
                path:'/statements',
                element: <Statements/>
            },
            {
               path: "*",
               element: <NotFound/>
            }
            
        ]
    }  
])

export default router;