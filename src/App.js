import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route path="/" render={() => <Main/>} />
            </div>
        </BrowserRouter>
    );
}

export default App;
