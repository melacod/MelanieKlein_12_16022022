import IconFlame from '../assets/IconFlame'
import IconApple from '../assets/IconApple'
import IconChicken from '../assets/IconChicken'
import IconHamburger from '../assets/IconHamburger'
import Thumb from './Thumb'
import './Scores.css'
import { NumberWithCommas } from '../utils/numbers'

export default function Scores({ keyData }) {
    return (
        <div className="thumbScores">
            <Thumb
                details={NumberWithCommas(keyData.calorieCount) + 'kCal'}
                title="Calories"
                iconBackgroundColor="#FBEAEA"
            >
                <IconFlame />
            </Thumb>
            <Thumb
                details={NumberWithCommas(keyData.proteinCount) + 'g'}
                title="Protéines"
                iconBackgroundColor="#E9F4FB"
            >
                <IconChicken />
            </Thumb>
            <Thumb
                details={NumberWithCommas(keyData.carbohydrateCount) + 'g'}
                title="Glucides"
                iconBackgroundColor="#FAF6E5"
            >
                <IconApple />
            </Thumb>
            <Thumb
                details={NumberWithCommas(keyData.lipidCount) + 'g'}
                title="Lipides"
                iconBackgroundColor="#FBEAEF"
            >
                <IconHamburger />
            </Thumb>
        </div>
    )
}
