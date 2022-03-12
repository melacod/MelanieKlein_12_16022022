import PropTypes from 'prop-types'
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Rectangle,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import SessionService from '../services/SessionService'
import Error from './Error'
import Loader from './Loader'
import './Session.css'

/**
 * Customized tooltip for the session chart
 * @component
 * @category Dashboard
 */
const SessionTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return <div className="session-tooltip">{payload[0].value}min</div>
    }
    return null
}

SessionTooltip.propTypes = {
    /**
     * Whether tooltip is active or not
     */
    active: PropTypes.bool,
    /**
     * Rechart tooltip payload
     */
    payload: PropTypes.array,
}

/**
 * Customized cursor for the session chart
 * @component
 * @category Dashboard
 */
const SessionCursor = ({ points }) => {
    // points[0] contains cursor coordinates (x,y)
    return (
        <Rectangle
            x={points[0].x}
            width={300 - points[0].x}
            y={0}
            height={258}
            fill="black"
            opacity={0.2}
        />
    )
}

SessionCursor.propTypes = {
    /**
     * Array containing point coordinates
     */
    points: PropTypes.array,
}

/**
 * Customized legend for the session chart
 * @component
 * @category Dashboard
 */
const SessionLegend = ({ payload }) => {
    if (payload) {
        return (
            <div className="sessions-legend">
                <div className="title">Durée moyenne des sessions</div>
            </div>
        )
    }
    return null
}

SessionLegend.propTypes = {
    /**
     * Rechart legend payload
     */
    payload: PropTypes.array,
}

/**
 * Session chart
 * @component
 * @category Dashboard
 */
const Session = ({ userId }) => {
    const { loading, data, error, exception } = SessionService(userId)

    return (
        <div>
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
                <div>
                    <LineChart
                        width={300}
                        height={258}
                        data={data}
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
                            stroke="white"
                            dy={5}
                        />
                        <YAxis axisLine={false} tickLine={false} hide={true} />
                        <Tooltip
                            content={<SessionTooltip />}
                            cursor={<SessionCursor />}
                        />
                        <Legend
                            verticalAlign="top"
                            height={50}
                            content={<SessionLegend />}
                        />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            legendType="none"
                            dot={false}
                            strokeWidth={2}
                            stroke="rgba(255, 255, 255, 0.6)"
                        />
                    </LineChart>
                </div>
            )}
        </div>
    )
}

Session.propTypes = {
    /**
     * User identifier
     */
    userId: PropTypes.string.isRequired,
}

export default Session
