import { useParams } from 'react-router-dom'
import SportsBar from '../layout/SportsBar'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Cards from '../components/Cards'
import Activity from '../components/Activity'
import Session from '../components/Session'
import Intensity from '../components/Intensity'
import Score from '../components/Score'
import UserService from '../services/UserService'

import './Dashboard.css'

/**
 * Dashboard page
 * @component
 * @category Dashboard
 */
const Dashboard = () => {
    // Get user identifier from URL parameter
    const { userId } = useParams()

    // Get user data for user
    const { loading, data, error, exception } = UserService(userId)

    console.log(data)

    return (
        <div className="dashboard">
            <SportsBar />
            <div className="content">
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

export default Dashboard
