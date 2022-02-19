import { NavLink } from 'react-router-dom'

import './Navigation.css'

export default function Navigation() {
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
