// Composant page permettant d'afficher un message d'erreur
// lorsque l'utilisateur se trouve sur une page inexistante dans les routes
export default function ErrorPage() {
    return (
        <div className="error">
            <div className="code">404</div>
            <div className="text">
                Oups! La page que vous demandez n'existe pas.
            </div>
        </div>
    )
}
