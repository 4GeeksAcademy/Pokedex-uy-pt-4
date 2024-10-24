import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.loadPokemons()
	},[])

	return <div className="text-center mt-5">
		<h1>Pokedex Aburrida!</h1>

		{ /* Tarjetas con Pokemones */}

		{
			store.pokemones.map( (pokemon, index) => {
				return <>
					<img 
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
						alt={pokemon.name} 
					/>
				 	<p>{pokemon.name}</p>
				</>
			})
		}
	</div>
};
