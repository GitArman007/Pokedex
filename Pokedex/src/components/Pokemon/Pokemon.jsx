import { Link } from 'react-router-dom';
import './Pokemon.css'
function Pokemon({ name ,  url , id  }){
        return(
                <div className="pokemon">
                     <Link to={`/pokemon/${id}`}>
                        <div className='pokemon-name'>{name}</div>
                        <img className='pokemon-image' src={url}/>
                      </Link>
                 </div>
        )
}
export default Pokemon;