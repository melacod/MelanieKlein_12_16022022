import PropTypes from 'prop-types'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import Error from './Error'
import Loader from './Loader'

import './Activity.css'
import ActivityService from '../services/ActivityService'

/**
 * Customized legend for the activity chart
 * @component
 * @category Dashboard
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

ActivityLegend.propTypes = {
    /**
     * Rechart legend payload
     */
    payload: PropTypes.object.isRequired,
}

/**
 * Customized tooltip for the activity chart
 * @component
 * @category Dashboard
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

ActivityTooltip.propTypes = {
    /**
     * Whether tooltip is active or not
     */
    active: PropTypes.bool.isRequired,
    /**
     * Rechart tooltip payload
     */
    payload: PropTypes.object.isRequired,
}

/**
 * Activity chart
 * @component
 * @category Dashboard
 */
const Activity = ({ userId }) => {
    // Get activity data for user
    const { loading, data, error, exception } = ActivityService(userId)

    return (
        <div className="activity">
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
                    data={data}
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

Activity.propTypes = {
    /**
     * User identifier
     */
    userId: PropTypes.number.isRequired,
}

export default Activity
