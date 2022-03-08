// Composant permettant d'afficher les actrivités de l'utilisateur

import {
    Bar,
    BarChart,
    CartesianGrid,
    Label,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { UserActivityProvider } from '../provider/DataProvider'
import Error from './Error'
import Loader from './Loader'

import './Activity.css'

// Personnalisation de la légende
const CustomizedLegend = ({ payload }) => {
    if (payload) {
        console.log(payload)
        return (
            <div className="activity-legend">
                <div className="title">Activité quotidienne</div>
                <div className="info">
                    {payload.map((entry, index) => (
                        <div key={`item-${index}`}>
                            <span
                                className="dot"
                                style={{ backgroundColor: entry.color }}
                            ></span>{' '}
                            <span className="value">{entry.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return null
}

// Personnalisation du tooltip
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    color: 'white',
                    backgroundColor: 'red',
                    padding: '5px',
                }}
            >
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        )
    }
    return null
}

// sous forme de barchart
export default function Activity({ userId }) {
    // Récupération des activités de l'utilisateur
    const { loading, data, error, exception } = UserActivityProvider(userId)

    console.log('activity', data)

    // Méthode pour transformer les dates en numéros à partir de 1
    const transformDates = () => {
        return data.data.sessions.map((session, indexSession) => {
            session.dayNumber = indexSession + 1
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
                    width={1000}
                    height={300}
                    data={transformDates()}
                    margin={{
                        top: 23,
                        right: 26,
                        left: 32,
                        bottom: 23,
                    }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="2 2" />
                    <XAxis
                        dataKey="dayNumber"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                    />
                    <Tooltip content={<CustomTooltip />} offset={50} />
                    <Legend
                        verticalAlign="top"
                        height={50}
                        content={<CustomizedLegend />}
                    />
                    <YAxis
                        yAxisId="ykilogram"
                        orientation="right"
                        stroke="#9B9EAC"
                        type="number"
                        domain={['dataMin - 1', 'dataMax + 1']}
                        tickCount={4}
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                    />
                    <Bar
                        yAxisId="ykilogram"
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={10}
                        legendType="circle"
                        name="Poids (kg)"
                        radius={[50, 50, 0, 0]}
                    />
                    <YAxis yAxisId="ycalories" hide />
                    <Bar
                        yAxisId="ycalories"
                        dataKey="calories"
                        fill="#E60000"
                        barSize={10}
                        legendType="circle"
                        name="Calories brûlées (kCal)"
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            )}
        </div>
    )
}
