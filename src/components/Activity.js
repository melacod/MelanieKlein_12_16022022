// Composant permettant d'afficher les activités de l'utilisateur

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

import './Activity.css'

/**
 * Customized legend for the activity chart
 * @component
 * @param {object} payload payload recharts legend data object
 * @returns HTML activity legend
 */
const ActivityLegend = ({ payload }) => {
    if (payload) {
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

/**
 * Customized tooltip for the activity chart
 * @component
 * @param {boolean} active whether tooltip is active or not
 * @param {object} payload payload recharts tooltip data object
 * @returns HTML activity tooltip
 */
const ActivityTooltip = ({ active, payload }) => {
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

/**
 * User activity chart
 * @component
 * @param {int} userId user identifier
 * @returns HTML activity chart
 */
function Activity({ userId }) {
    // Récupération des activités de l'utilisateur
    const { loading, data, error, exception } = UserActivityProvider(userId)

    // Méthode pour transformer les dates en numéros à partir de 1
    const transformDates = () => {
        return data.data.sessions.map((session, indexSession) => {
            session.dayNumber = indexSession + 1
            return session
        })
    }

    return (
        <div className="activity">
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
                    width={950}
                    height={300}
                    data={transformDates()}
                    margin={{
                        top: 23,
                        right: 26,
                        left: 32,
                        bottom: 23,
                    }}
                    barGap={8}
                >
                    <CartesianGrid vertical={false} strokeDasharray="2 2" />
                    <XAxis
                        dataKey="dayNumber"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                    />
                    <Tooltip content={<ActivityTooltip />} offset={50} />
                    <Legend
                        verticalAlign="top"
                        height={50}
                        content={<ActivityLegend />}
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

export default Activity
