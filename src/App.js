import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friends={props.store.getDialogs.friends}/>
            <div className={'content'}>
                <Route path={'/profile'} render={() => <Profile store={props.store}  />}/>

                <Route path={'/dialogs'} render={() =>
                    <Dialogs message={props.store.getDialogs.messages} friends={props.store.getDialogs.friends}/>}
                />
            </div>
        </div>
    )

}

export default App;