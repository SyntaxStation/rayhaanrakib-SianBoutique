import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../utils/Layout";
import Error from "../components/Error";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    }
])

export default router;