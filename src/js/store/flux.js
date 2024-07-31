import { Planets } from "../component/planets";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],

			plantes: [],

			ships: [],

			apiUrl: "https://www.swapi.tech/api/",

			favorites: []

		},
		actions: {

			getPeople: async () => {

				// .then(res => res.json())
				// .then(data => console.log(data))
				console.log("this should be working")
				const store = getStore()
				try {
					const resp = await fetch(store.apiUrl + "people")
					if (!resp) {
						throw Error(Response.statusText)
					}
					const peopleList = await resp.json()
					console.log(peopleList, "this coming from get people")

					for (let details of peopleList.results) {

						const detailResp = await fetch(details.url)
						const peopleDetails = await detailResp.json()
						console.log(peopleDetails)

						setStore({ people: [...store.people, peopleDetails.result] })
					}

				} catch (error) {

					// console.log(error)


				}
			},

			getPlanets: () => {
				let store = getStore()
				fetch(store.apiUrl + "planets")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log(error))



			},

			getStarships: () => {
				let store = getStore()
				fetch(store.apiUrl + "starships")
					.then(resp => resp.json())
					.then(data => setStore({ starships: data.results }))
					.catch(error => console.log(error))



			},

			addFavorites: (name) => {
				let store = getStore()
				store.favorites.push(name)
				setStore(store)


			},

			deleteFavorites: (name) => {
				let store = getStore()
				let newFavorites = store.favorites.filter((item) => item != name)
				setStore({ favorites: newFavorites })
			}

		}



	}
};

export default getState;
