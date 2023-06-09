import './Card.css'
import { useNavigate } from 'react-router-dom'

export const Card = (props) => {
    const navigate = useNavigate();
    const numberString = Number(props.country.population).toLocaleString('en-EN');
    
    return <div className="card" onClick={(e) => navigate(`/${props.country.cca3}`) }>
        <img src={props.country.flags.svg} alt={props.country.name.common+"-flag"} className="flag"/>
        
        <div className='card-info'>
            <p className='country-name'>{props.country.name.common}</p>
            <p className="data">
                <span className='header'>Population: </span>
                <span className='info'>{numberString}</span>
            </p>
            <p className="data">
                <span className='header'>Region: </span>
                <span className='info'>{props.country.region}</span>
            </p>
            <p className="data">
                <span className='header'>Capital: </span>
                <span className='info'>{props.country.capital}</span>
            </p>
        </div>
    </div>
}