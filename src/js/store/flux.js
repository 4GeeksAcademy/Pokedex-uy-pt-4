const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "Agustin",
					background: "blue",
					initial: "white"
				},
				{
					title: "Emiliano",
					background: "purple",
					initial: "white"
				}
			],
			pokemones: [],
			equipo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			loadPokemons: async () => {
				const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=100"
				const resp = await fetch(pokeApiUrl);
				const data = await resp.json()
				setStore({ pokemones: data.results });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addToTeam: (pokemon) => {
				const store = getStore();

				if(store.equipo.length >= 6) {
					return
				}

				const searchPokemon = store.equipo.find( item => item.name == pokemon.name )

				if(!searchPokemon){
					setStore({ equipo: [ ...store.equipo, pokemon ] })
				}

			},

			removeFromTeam: (pokemon) => {
				const store = getStore();

				const equipoNuevo = store.equipo
					.filter( item => item.name !== pokemon.name )

				setStore({ 
					equipo: equipoNuevo
				})

			}
		}
	};
};

export default getState;
