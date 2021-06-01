import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import React from "react";



const App = () => {
  return (
    <div className={classes['app-wrapper']}>
      <Header />
      <Navbar />
      <Dialogs />
    </div>
  )

}



export default App;