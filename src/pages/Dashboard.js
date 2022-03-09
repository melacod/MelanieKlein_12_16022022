import { useParams } from 'react-router-dom'
import SportsBar from '../layout/SportsBar'
import Error from '../components/Error'
import Loader from '../components/Loader'
import { UserProvider } from '../provider/DataProvider'
import './Dashboard.css'
import Cards from '../components/Cards'
import Activity from '../components/Activity'
import Session from '../components/Session'
import Intensity from '../components/Intensity'
import Score from '../components/Score'

// Page dashboard permettant d'afficher les informations générales d'un utilisateur
// Cette page prend en paramètre l'identifiant de l'utilisateur
export default function Dashboard() {
    // Récupération de l'identifiant de l'utilisateur dans les paramètres de l'URL
    const { userId } = useParams()

    // Récupération des informations de l'utilisateur
    const { loading, data, error, exception } = UserProvider(userId)

    console.log('user', data)

    return (
        <div className="dashboard">
            <SportsBar />
            <div className="content">
                {/* 
                    Si erreur : affichage du composant Error 
                    Sinon Si chargement en cours : affichage du composant Loader
                    Sinon si aucune données trouvé pour l'utilisateur qui a un identifiant égale à userId : affichage d'un message erreur
                    Sinon affichage du contenu de l'utilisateur
                */}
                {error ? (
                    <Error
                        message="Chargement impossible des données de l'utilisateur"
                        exception={exception}
                    />
                ) : loading ? (
                    <Loader />
                ) : !data ? (
                    <Error
                        message={
                            "Aucune données trouvé pour l'utilisateur (identifiant: " +
                            { userId } +
                            ')'
                        }
                    />
                ) : (
                    <>
                        <div>
                            <h1>
                                Bonjour{' '}
                                <span className="welcome">
                                    {data.data.userInfos.firstName}
                                </span>
                            </h1>
                            <h2>
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
                            </h2>
                        </div>
                        <div className="statistics">
                            <div className="graphs-container">
                                <div className="graph-activity">
                                    <Activity userId={userId} />
                                </div>
                                <div className="graph-session">
                                    <Session userId={userId} />
                                </div>
                                <div className="graph-intensity">
                                    <Intensity userId={userId} />
                                </div>
                                <div className="graph-score">
                                    <Score todayScore={data.data.todayScore} />
                                </div>
                            </div>
                            <div className="cards-container">
                                <Cards keyData={data.data.keyData} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
