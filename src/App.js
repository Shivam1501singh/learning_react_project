import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";



const Applayout=()=>{
    return(
        <div className="App">
            <Header/>
            <Body />
        </div>
    )
}

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>)
