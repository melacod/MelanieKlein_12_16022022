import PropTypes from 'prop-types'
import './Error.css'

/**
 * Error message
 * @component
 * @category Common
 */
const Error = ({ message, exception }) => {
    return (
        <div className="error">
            <div>
                {message} {exception && <small>({exception.message})</small>}
                <br />
                Please contact your Administrator.
            </div>
        </div>
    )
}

Error.propTypes = {
    /**
     * Error message
     */
    message: PropTypes.string.isRequired,
    /**
     * Exception
     */
    exception: PropTypes.object,
}

export default Error
