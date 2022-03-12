import PropTypes from 'prop-types'
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    Text,
} from 'recharts'
import IntensityService from '../services/IntensityService'
import Error from './Error'
import Loader from './Loader'

import './Intensity.css'

/**
 * Intensity chart
 * @component
 * @category Dashboard
 */
const Intensity = ({ userId }) => {
    // Get intensity data for user
    const { loading, data, error, exception } = IntensityService(userId)

    // Add padding to labels to make it more readable
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
                    data={data}
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
                        dataKey="kindText"
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

Intensity.propTypes = {
    /**
     * User identifier
     */
    userId: PropTypes.string.isRequired,
}

export default Intensity
