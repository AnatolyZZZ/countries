import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import './Countries.css'

// const throttele = (fn, t) => {
//     let blockUntil = -1;
//     let arg;
//     let tm;
//     return  function tr (...args) {
//         if (Date.now() > blockUntil) {
//             console.log('Called with no delay')
//             blockUntil = Date.now() + t;
//             console.log('block in ms', blockUntil - Date.now())
//             fn(...args)
//         } else {
//             clearTimeout(tm);
//             console.log('Called during delay')
//             tm = setTimeout(() => tr(...arg), blockUntil - Date.now())
//             arg = [...args];
//         }
//     }
// }

const debounce = function(fn, t) {
    let stoptime = Date.now() + t;
    let timer;
    return function(...args) {
        if (Date.now() <= stoptime) {
            clearTimeout(timer);
        }
        /// as we need array for setDisplay
        timer = setTimeout(()=> fn([...args]), t);
        stoptime  = Date.now() + t;
    }
};

export const Countries = (props) => {
    const allCountries = useSelector((state) => state.allCountries);
    const searchField = useSelector((state) => state.searchField);
    const filterRegion = useSelector((state) => state.filterRegion);

    const [displayedCountries, setDisplay] = useState(allCountries);
    // const setTrottled = throttele(setDisplay, 2000);
    const setDebounced = debounce(setDisplay, 700)

    const filterByName = (elt) => {
        return elt.name.common.toLowerCase().includes(searchField.toLowerCase())
    }
    const filterByRegion = (elt) => {
        return filterRegion === "Filter by Region" ? true : elt.region === filterRegion
    }
    
    const filterCards = () => {
       // do we need this spread?
        setDebounced(...allCountries.filter(filterByRegion).filter(filterByName))
        // setTrottled(...allCountries.filter(filterByName))
    }
    useEffect (()=>{setDisplay(allCountries)}, [allCountries])
    useEffect (()=>{filterCards()},[searchField, filterRegion, allCountries]);

    return <section>
                <div className="country-container container">
                    {displayedCountries.map((elt, idx) => {return <Card country={elt} key={idx}/>})}
                </div>
            </section>
    
}