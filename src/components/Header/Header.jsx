import classes from './Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"} alt="logo" />
                <a href={'/'}>
                    <h1>way-of-samurai</h1>
                </a>
            </div>
        </header>
    )
}

export default Header