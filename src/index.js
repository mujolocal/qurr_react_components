import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";


const App = () =>{
    return(
        <div>
            <Header 
                logoLocation = "http://127.0.0.1:8000/static/Frontend/img/favicon.png"
                menuImageLocation="http://127.0.0.1:8000/static/Frontend/img/menu.png"
                mainLink ="http://127.0.0.1:8000/"
                contactLink="http://127.0.0.1:8000/"
                blogLink="http://127.0.0.1:8000/"
            />
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);