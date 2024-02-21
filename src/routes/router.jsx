import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../utils/Layout";
import Error from "../components/Error";
import Home from "../pages/Home/Home";
import ShopPage from "../pages/Shop/ShopPage";
import AddProduct from "../pages/User/AddProduct";
import MyCart from "../pages/User/MyCart";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/User/Login";
import ProductDetails from "../pages/Shop/ProductDetails";

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
            {
                path: "/shop",
                element: <ShopPage></ShopPage>
            },
            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/add",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/cart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    }
])

export default router;