import PropTypes from 'prop-types'
import {
    Legend,
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    Text,
} from 'recharts'

import './Score.css'

/**
 * Customized legend for the score chart
 * @component
 * @category Dashboard
 */
const ScoreLegend = ({ payload }) => {
    if (payload) {
        return <div className="score-legend">Score</div>
    }
    return null
}

ScoreLegend.propTypes = {
    /**
     * Rechart legend payload
     */
    payload: PropTypes.array,
}

/**
 * Customized label for the score chart
 * @component
 * @category Dashboard
 */
const ScoreLabel = ({ cx, cy, value }) => {
    return (
        <>
            <Text
                x={cx}
                y={cy - 20}
                textAnchor="middle"
                dominantBaseline="central"
                width={100}
                className="score-percentage"
            >
                {value + '%'}
            </Text>
            <Text
                x={cx}
                y={cy + 20}
                textAnchor="middle"
                dominantBaseline="central"
                width={100}
                className="score-label"
            >
                de votre objectif
            </Text>
        </>
    )
}

ScoreLabel.propTypes = {
    /**
     * X label coordinate
     */
    cx: PropTypes.number,
    /**
     * Y label coordinate
     */
    cy: PropTypes.number,
    /**
     * Label value
     */
    value: PropTypes.number,
}

/**
 * Score chart
 * @component
 * @category Dashboard
 */
const Score = ({ todayScore }) => {
    const getData = () => {
        return [{ value: todayScore * 100, fill: 'red' }]
    }

    return (
        <RadialBarChart
            width={285}
            height={258}
            innerRadius="80%"
            barSize={12}
            data={getData()}
            startAngle={180}
            endAngle={-180}
            className="score"
        >
            <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
            />

            <Legend
                verticalAlign="top"
                align="left"
                height={50}
                content={<ScoreLegend />}
            />

            <RadialBar angleAxisId={0} dataKey="value" label={<ScoreLabel />} />
        </RadialBarChart>
    )
}

export default Score
