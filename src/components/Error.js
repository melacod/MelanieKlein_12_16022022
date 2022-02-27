import './Error.css'

// Composant permettant d'afficher un message d'erreur provenant d'une exception
export default function Error({ message, exception }) {
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
