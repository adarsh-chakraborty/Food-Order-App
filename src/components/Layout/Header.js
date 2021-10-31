import headerimg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={headerimg} alt="A table full of doge food" />
			</div>
		</>
	);
};

export default Header;
