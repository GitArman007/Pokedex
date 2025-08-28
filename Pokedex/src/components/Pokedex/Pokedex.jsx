//imports CSS
import "./Pokedex.css"
import Search from "../Search/Search";
import Pokemonlist from "../Pokemonlist/Pokemonlist";
import { useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedex(){
    const[ searchTerm , setSearchTerm ] = useState('');
    return(
        <div className="pokedex-wrapper">
            <h1>POKEDEX</h1>
             <Search upadateSearchterm={setSearchTerm} />
             { searchTerm ?  <PokemonDetails pokemonaName={searchTerm}/> : <Pokemonlist />}
        </div>
    )
}
export default Pokedex;