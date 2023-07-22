import { useParams, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import './CountryInfo.css'

export const CountryInfo = (props) => {
    const countries = useSelector((state) => state.allCountries);
    const {id} = useParams();
    const country = countries.find(elt => elt.cca3 === id);
    let languages='', numberString='', currencies='', nativename='';
    // console.log(country)
    if (country) {
        languages = Object.values(country.languages).join(', ');
        numberString = Number(country.population).toLocaleString('en-EN');
        currencies = Object.values(Object.values(country.currencies).map(elt => elt.name)).join(', ');
        // console.log('native name', (Object.values(country.name.nativeName)).map(elt => elt))
        if (Object.entries(country.name.nativeName).length > 0) {
            nativename = Object.values(country.name.nativeName).map(elt => elt.common).join(' | ')
        }
    }
    const navigate = useNavigate();

    useEffect(()=>window.scrollTo(0,0),[])
    return country ? 
    <section className="country-page">
        <div className="container">
            <div className="button" onClick={(e) => navigate('/')}><FontAwesomeIcon icon={faArrowLeftLong} />Back</div>
            <div className="country-info flex-wide">
                <img src={country.flags.svg} alt={country.name.common + "-flag"} className="info-flag"/>
                <div className="country-details">
                    <p className='country-name'>{country.name.common}</p>
                    <div className="flex-wide">
                        <div className="first-block">
                            <p className="data">
                                <span className='header'>Native Name: </span>
                                <span className='info'>{nativename}</span>
                            </p>
                            <p className="data">
                                <span className='header'>Population: </span>
                                <span className='info'>{numberString}</span>
                            </p>
                            <p className="data">
                                <span className='header'>Region: </span>
                                <span className='info'>{country.region}</span>
                            </p>
                            <p className="data">
                                <span className='header'>Sub Region: </span>
                                <span className='info'>{country.subregion}</span>
                            </p>
                            <p className="data">
                                <span className='header'>Capital: </span>
                                <span className='info'>{country.capital}</span>
                            </p>
                        </div>
                        <div className="second-block">
                            <p className="data">
                                <span className='header'>Top Level Domain: </span>
                                <span className='info'>{country.tld.join(' | ')}</span>
                            </p>
                            <p className="data">
                                <span className='header'>Currencies: </span>
                                <span className='info'>{currencies}</span>
                            </p>
                            <p className="data">
                                <span className='header'>Languages: </span>
                                <span className='info'>{languages}</span>
                            </p>
                        </div>
                    </div>
                    
                    {country.borders ? <div className="neighbors">
                    <span className='header border'>Border Countries: </span>
                        {country.borders.map((elt, idx) => <div 
                                                            className="button" 
                                                            key={idx}
                                                            onClick={(e) => navigate(`/${elt}`)}>
                                                                {countries.find(e => e.cca3 === elt).name.common}
                                                            </div>)}
                    </div> : <span className="info">None</span>}
                </div>
            </div>
            </div>
    </section> : <></>
}