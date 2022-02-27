import './Loader.css'

// Composant permettant d'afficher le spinner pendant le chargement des données
export default function Loader() {
    return (
        <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
