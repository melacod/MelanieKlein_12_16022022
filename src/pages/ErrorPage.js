/**
 * Error page when URL is not found
 * @component
 * @category Common
 */
const ErrorPage = () => {
    return (
        <div className="error">
            <div className="code">404</div>
            <div className="text">
                Oups! La page que vous demandez n'existe pas.
            </div>
        </div>
    )
}

export default ErrorPage
