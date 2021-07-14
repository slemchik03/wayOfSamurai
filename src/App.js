import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    const store = props.store
    const friends = props.store.getDialogs.friends
    const message = props.store.getDialogs.currentMessage
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'content'}>
                <Route path={'/profile'} render={() => <Profile store={store}/>}/>
                <Route path={'/dialogs'} render={() =>
                    <Dialogs dispatch={store.dispatch.bind(store)} currentMessage={message} friends={friends}/>}
                />

            </div>
        </div>
    )

}

export default App;