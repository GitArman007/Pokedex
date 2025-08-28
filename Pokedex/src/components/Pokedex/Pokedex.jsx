//imports CSS
import "./Pokedex.css"
import Search from "../Search/Search";
import Pokemonlist from "../Pokemonlist/Pokemonlist";
function Pokedex(){
    return(
        <div className="pokedex-wrapper">
            <h1>POKEDEX</h1>
             <Search />
             <Pokemonlist />
        </div>
    )
}
export default Pokedex;