import classes from './Navbar.module.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


const Navbar = () => {
	return (
		<div className={classes.nav}>
			<ul>
				<li>
					<Link to={'/profile'} >Profile</Link>
				</li>
				<li>
					<Link to={'/message'} >Message</Link>
				</li>
				<li>
					<Link to={'/music'} >Music</Link>
				</li>
				<li>
					<Link to={'/other'} >Other</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar