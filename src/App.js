import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Route path="/" render={() => <Main/>} />
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
