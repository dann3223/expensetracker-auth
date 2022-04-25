import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.title}>MyTracker</li>

				{!user && (
					<>
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
						<li>
							<NavLink to="/signup">Sign Up</NavLink>
						</li>
					</>
				)}

				{user && (
					<>
						<li className={styles.greeting}>Hello, {user.displayName}</li>
						<li>
							<button className={styles.specialButton} onClick={logout}>
								Logout
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
