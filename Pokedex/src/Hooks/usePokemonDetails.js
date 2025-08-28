import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function usePokemonDetails(id){
     
    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const[pokemon , setPokemon ] = useState(null);
     async function downloadPokemon(id){
            const response = await axios.get(POKEMON_DETAIL_URL + id) 
            const pokemon =response.data;
            setPokemon({
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types,
                image: pokemon.sprites.other.dream_world.front_default
            })
     }
    
     useEffect(() =>{
            downloadPokemon();
     },[])
      
     return [pokemon];
}
export default usePokemonDetails;