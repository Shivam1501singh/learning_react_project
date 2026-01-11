import React from "react";
import ReactDOM from "react-dom/client";

const Tittle=()=>(
     <h1>Hello World</h1>
)

const Headingcomponent=()=>(
    <div>
        <Tittle />
        <h2>hello shivam singh😊😊</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent />)
