import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.js'
import Navigation from './Navigation.js'

import './Header.css'

/**
 * Page header
 * @component
 * @category Common
 */
const Header = () => {
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

export default Header
