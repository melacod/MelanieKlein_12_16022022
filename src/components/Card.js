import PropTypes from 'prop-types'
import './Card.css'

/**
 * User key data card
 * @component
 * @category Dashboard
 */
const Card = ({ title, details, iconBackgroundColor, children }) => {
    return (
        <>
            <div className="card">
                <div
                    className="icon-container"
                    style={{
                        backgroundColor: iconBackgroundColor,
                    }}
                >
                    {children}
                </div>
                <div className="text-container">
                    <div className="details"> {details} </div>
                    <div className="title"> {title} </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    /**
     * Title of the card
     */
    title: PropTypes.string.isRequired,
    /**
     * Details of the card
     */
    details: PropTypes.string.isRequired,
    /**
     * Background color of the icon of the card
     */
    iconBackgroundColor: PropTypes.string.isRequired,
    /**
     * Children node of the card
     */
    children: PropTypes.object,
}

export default Card
