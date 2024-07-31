import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Character = ({ person }) => {
	const { store, actions } = useContext(Context)

	const handlefavorites = () => {
		if (store.favorites.includes(person.properties.name)) {
			actions.deleteFavorites(person.properties.name)

		}

		else { actions.addFavorites(person.properties.name) }

	}

	return (


		<div >

			<div class="card" style={{ width: "19rem" }}>

				<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" class="card-img-top" alt="..." >
				</img>
				<div class="card-body">
					<h5 class="card-title">{person.properties.name}</h5>
					<p class="card-text">Gender:{person.properties.gender} <br /> Hair Color:{person.properties.hair_color} <br /> Eye-Color:{person.properties.eye_color}
					</p>
					<div className="navbar">
						<Link to={`/CharacterView/${person?.uid}`}>
							<button className="btn btn-primary">Learn more!</button>
						</Link>
						<button onClick={() => handlefavorites()} className="btn">
							<i class={store.favorites.includes(person.properties.name) ? "fa-soild fa-heart" : "fa-regular fa-heart"}></i>
						</button>

					</div>



				</div>


			</div>
		</div>



	)
};
