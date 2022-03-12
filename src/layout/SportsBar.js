import IconBike from '../assets/IconBike'
import IconDumbell from '../assets/IconDumbell'
import IconSwimming from '../assets/IconSwimming'
import IconYoga from '../assets/IconYoga'

import './SportsBar.css'

/**
 * Page sport bar
 * @component
 * @category Common
 */
const SportsBar = () => {
    return (
        <div className="sports-bar">
            <ul>
                <li>
                    <IconYoga />
                </li>
                <li>
                    <IconSwimming />
                </li>
                <li>
                    <IconBike />
                </li>
                <li>
                    <IconDumbell />
                </li>
            </ul>
            <span>Copyright, SportSee 2020</span>
        </div>
    )
}

export default SportsBar
