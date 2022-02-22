import IconBike from '../assets/IconBike'
import IconMuscu from '../assets/IconMuscu'
import IconSP from '../assets/IconSP'
import IconYoga from '../assets/IconYoga'

import './SportBar.css'

export default function SportBar() {
    return (
        <div className="sportBar">
            <ul>
                <li>
                    <IconYoga />
                </li>
                <li>
                    <IconSP />
                </li>
                <li>
                    <IconBike />
                </li>
                <li>
                    <IconMuscu />
                </li>
            </ul>
            <span>Copyright, SportSee 2020</span>
        </div>
    )
}
