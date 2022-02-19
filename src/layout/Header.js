import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.js'

import Navigation from './Navigation.js'

import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <Logo color="red" />
                </Link>
            </div>
            <Navigation />
        </header>
    )
}
