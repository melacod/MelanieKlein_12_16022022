import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    Text,
} from 'recharts'
import { UserIntensityProvider } from '../provider/DataProvider'
import Error from './Error'
import Loader from './Loader'

import './Intensity.css'

export default function Intensity({ userId }) {
    // Récupération des activités de l'utilisateur
    const { loading, data, error, exception } = UserIntensityProvider(userId)

    console.log('performance', data)

    // Méthode pour transformer les numéros en Performance
    const transformCategories = () => {
        return data.data.data.map((obj) => {
            obj.categoryText = translateCategory(data.data.kind[obj.kind])
            return obj
        })
    }

    // Méthode pour traduire le nom des catégories
    const translateCategory = (categoryText) => {
        if (categoryText === 'cardio') return 'Cardio'
        if (categoryText === 'energy') return 'Energie'
        if (categoryText === 'endurance') return 'Endurance'
        if (categoryText === 'strength') return 'Force'
        if (categoryText === 'speed') return 'Vitesse'
        if (categoryText === 'intensity') return 'Intensité'
        return ''
    }

    const addPaddingToLabels = ({ payload, x, y, cx, cy, ...rest }) => {
        return (
            <Text
                {...rest}
                verticalAnchor="middle"
                y={y + (y - cy) / 12}
                x={x + (x - cx) / 12}
            >
                {payload.value}
            </Text>
        )
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
                    className="intensity"
                    width={300}
                    height={258}
                    outerRadius="80%"
                    data={transformCategories()}
                    fill="white"
                    margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="categoryText"
                        fontSize={12}
                        tick={addPaddingToLabels}
                    />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar
                        name="intensity"
                        dataKey="value"
                        stroke=""
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            )}
        </div>
    )
}
