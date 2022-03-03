import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from 'recharts'
import { UserIntensityProvider } from '../provider/DataProvider'
import Error from './Error'
import Loader from './Loader'

export default function Intensity({ userId }) {
    // Récupération des activités de l'utilisateur
    const { loading, data, error, exception } = UserIntensityProvider(userId)

    console.log('performance', data)

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
                    message="Chargement impossible des performances de l'utilisateur"
                    exception={exception}
                />
            ) : loading ? (
                <Loader />
            ) : !data ? (
                <Error
                    message={
                        "Aucune performance trouvée pour l'utilisateur (identifiant: " +
                        { userId } +
                        ')'
                    }
                />
            ) : (
                <RadarChart
                    width={200}
                    height={200}
                    outerRadius="80%"
                    data={data.data.data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis />
                    <Radar
                        name="Mike"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            )}
        </div>
    )
}
