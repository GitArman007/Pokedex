import { useEffect , useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

function usePokemonList(DEFAULT_URL){
    const[ pokemonListState , setPokemonListState] = useState({
            pokemonList : [],
            pokedexUrl : DEFAULT_URL,
            nextUrl : DEFAULT_URL,
            prevUrl : DEFAULT_URL
    })
        //everytime the component is rerendered the useffect callback is called 
        useEffect(() => {
                downloadPokemons(pokemonListState , setPokemonListState , DEFAULT_URL );
        },[pokemonListState.pokedexUrl])

        return[ pokemonListState ,  setPokemonListState ];
}
export default usePokemonList