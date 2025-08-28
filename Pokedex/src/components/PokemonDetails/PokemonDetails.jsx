//css imports 
//custom hooks 
import usePokemonDetails from '../../Hooks/usePokemonDetails';
import './PokemonDetails.css'
import { Link  , useParams } from 'react-router-dom';

function PokemonDetails(){
      const{id} = useParams();
        const[ pokemon] = usePokemonDetails(id);
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
  </>
);
}
export default PokemonDetails;