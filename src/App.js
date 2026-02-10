import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import Resturantmenu from "./components/Resturantmenu";



const Applayout=()=>{
    return(
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    )
}

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resturants/:resId",
                element:<Resturantmenu/>
            }
        ],
        errorElement:<Error/>
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>)
