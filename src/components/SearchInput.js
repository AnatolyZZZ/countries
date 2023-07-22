import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../actions";
import './SearchInput.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchInput = (props) => {
    const reduxValue = useSelector((state) => state.searchField);
    const dispatch = useDispatch();

    return <div className="flex-between align-center search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input 
                type="text" 
                placeholder="Search for a country..."
                onChange={(e) => dispatch(setSearch(e.target.value))}
                className="search-input"
                value={reduxValue}
                id="main-search-input"
            />
        </div>
            
            
    
}