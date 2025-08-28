//impor pokemonlist css
import "./Pokemonlist.css"
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../Hooks/usepokemonList";
 
function Pokemonlist(){
     const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    //this is our custom hook that we import and use 
    //the whole logic is implemented in usePokemonList.js hooks
    //And we can just use it 
    const[pokemonListState , setPokemonListState ] = usePokemonList(DEFAULT_URL);
        return(
            <div className="pokemon-list-wrapper">
                <div id="pokemon-list-header">
                    <h1>Pokemonlist</h1>
                     <div className="page-control">
                        <button onClick={() => setPokemonListState({...pokemonListState , pokedexUrl : pokemonListState.prevUrl })}>Prev</button>
                        <button onClick={() => setPokemonListState({...pokemonListState , pokedexUrl : pokemonListState.nextUrl })}>Next</button>
                     </div>
                    </div>
                <div className="pokemon-list">
                     {pokemonListState.pokemonList.map(pokemon => <Pokemon
                           id={pokemon.id}
                           name={pokemon.name} 
                           key={pokemon.id}
                           url={pokemon.image} />)}
                </div>

            </div>
        )
}
export default Pokemonlist;