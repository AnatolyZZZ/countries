import { SearchInput } from "./SearchInput";
import { CountryFilter } from "./CountryFilter";
import './Inputs.css'

export const Inputs = (props) => {
    return <section>
        <div className="two-inputs container">
            <SearchInput/>
            <CountryFilter/>
        </div>
    </section>
    
}