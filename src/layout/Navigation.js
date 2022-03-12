import { NavLink } from 'react-router-dom'

import './Navigation.css'

/**
 * Page navigation
 * @component
 * @category Common
 */
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/profil">Profil</NavLink>
                </li>
                <li>
                    <NavLink to="/setting">Réglage</NavLink>
                </li>
                <li>
                    <NavLink to="/community">Communauté</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
