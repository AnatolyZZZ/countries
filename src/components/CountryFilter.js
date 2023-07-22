import { useSelector, useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect} from "react";
import { setRegion } from "../actions";
import './CountryFilter.css'

export const CountryFilter = (props) => {
    const allCountries = useSelector((state) => state.allCountries);
    const filterRegion = useSelector((state) => state.filterRegion);
    const dispatch = useDispatch();
    // states if dropdown menu hidden
    const [hidden, toggleHidden] = useState(true);
    // for maping througth
    const [regions, setRegions] = useState([]);

   


    useEffect (()=>{
         // extract all unique regions from all countries array
        const uniqueRegionSet = allCountries.reduce((prev, curr) => prev.add(curr.region), new Set());
        const uniqueRegionArray = Array.from(uniqueRegionSet);
        // have to refresh after each change in filterRegion, and after downloading al countries
        const idx = uniqueRegionArray.indexOf(filterRegion);

        if (idx !== -1) {
            uniqueRegionArray.splice(idx, 1);
        }

        if (filterRegion !== "Filter by Region") {
            uniqueRegionArray.push('Filter by Region')
        }
        setRegions([...uniqueRegionArray])
    }, [filterRegion, allCountries]);

    return <div className="country-filter">
        <div className="dropdown-selector flex-between align-center" onClick={(e)=>toggleHidden(!hidden)}>
            <p className="filter-inner">{filterRegion}</p>
            <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <div className={hidden ? "dropdown-menu hidden" : 'dropdown-menu'}>
                        {regions.map((elt, idx) => <div 
                                className="dropdown-item"
                                key={idx}
                                onClick={(e) => {dispatch(setRegion(elt)); toggleHidden(!hidden)}}
                                >
                                    {elt === 'Filter by Region' ? "All regions" : elt}
                        </div>)}
        </div>
    </div>
}