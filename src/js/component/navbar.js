import React, { useContext } from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3 container">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div class="dropdown">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul class="dropdown-menu">
					{store.favorites.map(item => (<li className="navbar"><p>{item}</p>
						<button className="btn" onClick={() => actions.deleteFavorites(item)}> <i class="fa-solid fa-trash"></i></button></li>
					))}
				</ul>
			</div>

		</nav>
	);
};
