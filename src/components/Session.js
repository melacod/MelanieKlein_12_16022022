import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { UserSessionsProvider } from '../provider/DataProvider'
import Error from './Error'
import Loader from './Loader'
import './Session.css'

export default function Session({ userId }) {
    const { loading, data, error, exception } = UserSessionsProvider(userId)

    console.log('sessions', data)

    // Méthode pour transformer les dates en numéros à partir de 1
    const transformDates = () => {
        return data.data.sessions.map((session, indexSession) => {
            session.dayText = ''
            if (session.day === 1) session.dayText = 'L'
            if (session.day === 2) session.dayText = 'M'
            if (session.day === 3) session.dayText = 'M'
            if (session.day === 4) session.dayText = 'J'
            if (session.day === 5) session.dayText = 'V'
            if (session.day === 6) session.dayText = 'S'
            if (session.day === 7) session.dayText = 'D'
            return session
        })
    }

    return (
        <div>
            {/* 
            Si erreur : affichage du composant Error 
            Sinon Si chargement en cours : affichage du composant Loader
            Sinon si aucune données trouvé pour l'utilisateur qui a un identifiant égale à userId : affichage d'un message erreur
            Sinon affichage du contenu de l'utilisateur
        */}
            {error ? (
                <Error
                    message="Chargement impossible des sessions de l'utilisateur"
                    exception={exception}
                />
            ) : loading ? (
                <Loader />
            ) : !data ? (
                <Error
                    message={
                        "Aucune session trouvée pour l'utilisateur (identifiant: " +
                        { userId } +
                        ')'
                    }
                />
            ) : (
                <LineChart
                    width={300}
                    height={258}
                    data={transformDates()}
                    margin={{
                        top: 15,
                        right: 15,
                        left: 15,
                        bottom: 5,
                    }}
                    className="session"
                >
                    <CartesianGrid
                        vertical={false}
                        horizontal={false}
                        strokeDasharray="3 3"
                    />
                    <XAxis
                        dataKey="dayText"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis axisLine={false} tickLine={false} hide={true} />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        legendType="none"
                    />
                </LineChart>
            )}
        </div>
    )
}
