import { DarkModeToggle } from "./DarkModeToggle"
import './Header.css'

export const Header = (props) => {
    return <header>
        <div className="flex-between container align-center">
            <h3>Where in the world?</h3>
            <DarkModeToggle/>
        </div>
    </header>
}