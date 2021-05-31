import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.nav}>
			<ul>
				<li><a href={'/'}>Profile</a></li>
				<li><a href={'/'}>Message</a></li>
				<li><a href={'/'}>Music</a></li>
				<li><a href={'/'}>Others</a></li>
			</ul>
		</div>
	)
}

export default Navbar