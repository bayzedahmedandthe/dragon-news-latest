import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import MidHome from "../Components/MidHome";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/category/:category_id",
                element: <MidHome></MidHome>
            }
        ]
    },
    {
        path: "/news",
        element: <h2>News page here</h2>
    },
    {
        path: "/login",
        element: <h2>Login page here</h2>
    },
])

export default Routes;