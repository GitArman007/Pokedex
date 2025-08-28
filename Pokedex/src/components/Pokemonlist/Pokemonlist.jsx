//impor pokemonlist css
import { useEffect, useState } from "react";
import axios from "axios"
import "./Pokemonlist.css"
import Pokemon from "../Pokemon/Pokemon";
 
function Pokemonlist(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    // const [pokedexUrl , setPokedexUrl] = useState(DEFAULT_URL);
    // const [ pokemonList , setpokemonList ] = useState([]);
    // const [ nextUrl , setNextUrl ] = useState(DEFAULT_URL); 
    // const [ prevUrl , setPrevUrl ] = useState(DEFAULT_URL); 

    //maintaining all the state in one block instead of writting separately
    const[ pokemonListState , setPokemonListState] = useState({
            pokemonList : [],
            pokedexUrl : DEFAULT_URL,
            nextUrl : DEFAULT_URL,
            prevUrl : DEFAULT_URL
    })

        //we are using axios for downloading data from the Url 
        async function downloadPokemons(){

        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL )
            
        //1.here we fetch result from the API . where result = array of pokemon
        const pokemonResults = response.data.results;

        //loading next and prev url
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous)
        // setPokemonListState((state) => ( {...state , nextUrl:response.data.next , nextUrl:response.data.previous }))

        //2.loop on this array of pokemon and make calls on the each object of the array = result 
        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        console.log(pokemonPromise);//axios.get return a array of promise 

        //3.here we make another call for fetch data from the pokemonPromise
        const pokemonlistData = await axios.all(pokemonPromise);
        
        //4.Now we itterate on this pokenmonlist data and fetch some properties 
        const pokemonFinalList = pokemonlistData.map( pokemonData => {
            const pokemon = pokemonData.data;
            return{
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                type: pokemon.types
            }
        })
        
        //hence set this prepared list to the pokemonlist
        // setpokemonList(pokemonFinalList)
        setPokemonListState({...pokemonListState , pokemonList : pokemonFinalList , nextUrl:response.data.next , prevUrl:response.data.previous })
        }

        //everytime the component is rerendered the useffect callback is called 
        //when click on prev and nexturl the pokedex url is changed so that 
        //and pokedex in dependecny array is changed 
        //so that useeffect also called 
        useEffect(() => {
                downloadPokemons();
        },[pokemonListState.pokedexUrl])


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