// Composant permettant d'afficher les actrivités de l'utilisateur

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { UserActivityProvider } from '../provider/DataProvider'
import Error from './Error'
import Loader from './Loader'

// sous forme de barchart
export default function Activity({ userId }) {
    // Récupération des activités de l'utilisateur
    const { loading, data, error, exception } = UserActivityProvider(userId)

    console.log('activity', data)

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
                    message="Chargement impossible des activités de l'utilisateur"
                    exception={exception}
                />
            ) : loading ? (
                <Loader />
            ) : !data ? (
                <Error
                    message={
                        "Aucune activité trouvée pour l'utilisateur (identifiant: " +
                        { userId } +
                        ')'
                    }
                />
            ) : (
                <BarChart
                    width={500}
                    height={300}
                    data={data.data.sessions}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#82ca9d"
                    />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="calories" fill="#82ca9d" />
                </BarChart>
            )}
        </div>
    )
}
