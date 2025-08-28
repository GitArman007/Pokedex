//import css
import useDebounce from "../../Hooks/useDebounce";
import "./Search.css"
function Search({upadateSearchterm}){
        const debounceUpdateSearch = useDebounce((e) => upadateSearchterm(e.target.value));

        return(
            <input
             id="search-pokemon"
             type="text"
             placeholder="search pokemon..." 
             onChange={debounceUpdateSearch}

             />
        )
}
export default Search;
/*
onChange={(e) => upadateSearchterm(e.target.value)}
here everytime we enter a letter it get update search term so that on every letter there is and API call occur
*/