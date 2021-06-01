import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'content'}>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/message'} component={Dialogs}/>
                </div>
            </div>
        </Router>
    )

}


export default App;