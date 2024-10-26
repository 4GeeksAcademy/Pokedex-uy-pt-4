import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatName, formatUrl, formatTypeUrl } from "../utils";

const PokemonDetails = () => {

    const { pokemon_id } = useParams();

    const [ pokemonInfo, setPokemonInfo ] = useState();

    const findPokemon = async () => {
        try{
            const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon_id;
            const resp = await fetch(pokeApiUrl);
            const data = await resp.json()
            console.log(data);
            setPokemonInfo(data);
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        findPokemon();
        
        return () => {
            console.log(`Salimos del Componente PokemonDetails`)
        }

    },[])

    return (<div className="mt-3 container bg-light rounded-3">
        
        {   pokemonInfo && <>
                <h1 className="display-4 fst-italic mt-2">
                    {formatName(pokemonInfo.name)}
                </h1>
                <img src={formatUrl(pokemon_id)} alt={'image-' + pokemonInfo.name} style={{
                    maxWidth: "300px"
                }} />

                <div>
                    {
                        pokemonInfo.types.map((pokemonType, index) => {
                            return <img src={formatTypeUrl(pokemonType.type.url)} alt={'image-' + pokemonInfo.name} style={{
                                    maxWidth: "120px"
                                }} 
                            />
                        })
                    }
                </div>
            </>
        }

    </div>);
}

export default PokemonDetails;
