import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {

    const { pokemon_id } = useParams();

    return (<h1>Pokemon Details {pokemon_id}</h1>);
}

export default PokemonDetails;
