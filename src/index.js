import './reset.css';
import './index.css';
import Store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const store = new Store()

const reloadState = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
        ,
        document.querySelector('#root')
    )

}

store.setRender = reloadState

reloadState()