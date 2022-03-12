import PropTypes from 'prop-types'
import IconFlame from '../assets/IconFlame'
import IconApple from '../assets/IconApple'
import IconChicken from '../assets/IconChicken'
import IconHamburger from '../assets/IconHamburger'
import Card from './Card'
import './Cards.css'
import NumberWithCommas from '../utils/numbers'

/**
 * User key data cards
 * @component
 * @category Dashboard
 */
const Cards = ({ keyData }) => {
    return (
        <div className="cardScores">
            <Card
                details={NumberWithCommas(keyData.calorieCount) + 'kCal'}
                title="Calories"
                iconBackgroundColor="#FBEAEA"
            >
                <IconFlame />
            </Card>
            <Card
                details={NumberWithCommas(keyData.proteinCount) + 'g'}
                title="Protéines"
                iconBackgroundColor="#E9F4FB"
            >
                <IconChicken />
            </Card>
            <Card
                details={NumberWithCommas(keyData.carbohydrateCount) + 'g'}
                title="Glucides"
                iconBackgroundColor="#FAF6E5"
            >
                <IconApple />
            </Card>
            <Card
                details={NumberWithCommas(keyData.lipidCount) + 'g'}
                title="Lipides"
                iconBackgroundColor="#FBEAEF"
            >
                <IconHamburger />
            </Card>
        </div>
    )
}

Cards.propTypes = {
    /**
     * User key data
     */
    keyData: PropTypes.object.isRequired,
}

export default Cards
