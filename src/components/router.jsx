import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Page/Home";
import About from "./Page/About";
import Search from "./Page/Search";
import Card from "./Page/Card";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            }
            ,
            {
                path: "search",
                element: <Search></Search>
            },
            {
                path: "card",
                element: <Card></Card>
            }
        ]
    }
])
export default router;