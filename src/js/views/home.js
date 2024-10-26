import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { formatUrl } from "../utils";
import PokemonCard from "../component/pokemonCard";
import Hero from "../component/hero";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.loadPokemons()
	},[])

	return <div className="container-fluid">
		<Hero title={`Pokedex`} description={`Got catch it all.`}/>

		{ /* Tarjetas con Pokemones */}

		<div className="d-flex flex-wrap w-100">
			{
				store.pokemones.map( (pokemon, index) => {
					return <PokemonCard
						key={index}
						name={pokemon.name}
						imageUrl={formatUrl(index + 1)}
						id={index+1}
					/>
				})
			}
		</div>
	</div>
};
