import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"} alt="logo"/>
                <NavLink to={'/profile'}>
                    <h1>way-of-samurai</h1>
                </NavLink>
            </div>
        </header>
    )
}

export default Header