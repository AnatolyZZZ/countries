import { useDispatch, useSelector } from "react-redux"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import {faSun} from "@fortawesome/free-solid-svg-icons"
import {toggleDark} from '../actions/index.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './DarkModeToggle.css'

export const DarkModeToggle = (props) => {
    const isDark = useSelector(state => state.darkMode);
    const dispatch = useDispatch();
    let msg = isDark ? 'Light Mode' : 'Dark Mode';
    let icon = isDark ? faSun : faMoon
    return <div className="d-toggle" onClick={(e)=>dispatch(toggleDark())}>
        <FontAwesomeIcon icon={icon} className='dark-mode-icon'/>
        {msg}
    </div>
}