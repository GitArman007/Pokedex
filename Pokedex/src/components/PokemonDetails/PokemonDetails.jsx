//css imports 
//custom hooks 
import usePokemonDetails from '../../Hooks/usePokemon';
import './PokemonDetails.css'
import { Link  , useParams } from 'react-router-dom';
import Pokemon from '../Pokemon/Pokemon';


function PokemonDetails(){
      const{id} = useParams();
        const[ pokemon , pokemonListState ] = usePokemonDetails(id);
       return (
  <>
    <h1 className='pokedex-redirect'>
      <Link to="/">Pokedex</Link>
    </h1>

    {pokemon ? (   // <-- check if pokemon is not null
      <div className="pokemon-details-wrapper">
        <div className="pokemon-details-name">
          {pokemon.name}
        </div>
        <div className="pokemon-image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="pokemon-attr">
          <div>
            height: {pokemon.height}
          </div>
          <div>
            weight: {pokemon.weight}
          </div>
        </div>
        <div className="pokemon-types">
          <h1>Type:</h1>
          {pokemon.types.map(t => (
            <span className="type" key={t.type.name}>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    ) : (
      <p>Loading...</p>   // <-- fallback UI while fetching
    )}

    <div className='similar-pokemons'>
      <h2> Similaer Pokemons </h2>
      <div className='similar-pokemon-boxes'>
                {pokemonListState.pokemonList.length > 0 && 
                  pokemonListState.pokemonList.map(pokemon => <Pokemon
                           id={pokemon.id}
                           name={pokemon.name} 
                           key={pokemon.id}
                           url={pokemon.image} />)
                
                
                }
      </div>
    </div>
  </>
);
}
export default PokemonDetails;