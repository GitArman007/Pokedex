import axios from "axios"
async function downloadPokemons( pokemonListState , setPokemonListState , DEFAULT_URL  ){

        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL )
            
        //1.here we fetch result from the API . where result = array of pokemon
        const pokemonResults = response.data.results ? response.data.results : response.data.pokemon;

        //loading next and prev url
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous)
        // setPokemonListState((state) => ( {...state , nextUrl:response.data.next , nextUrl:response.data.previous }))

        //2.loop on this array of pokemon and make calls on the each object of the array = result 
        const pokemonPromise = pokemonResults.map((p) => {
            if(p.url){
               return axios.get(p.url)
            }else if(p.pokemon.url){
                return axios.get(p.pokemon.url)
            }

            
        });
        //3.here we make another call for fetch data from the pokemonPromise
        const pokemonlistData = await axios.all(pokemonPromise);
        console.log(pokemonlistData)
        
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
        export default downloadPokemons;