import {
    Legend,
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    Text,
} from 'recharts'

import './Score.css'

// Personnalisation de la légende
const CustomizedLegend = ({ payload }) => {
    if (payload) {
        return <div className="score-legend">Score</div>
    }
    return null
}

// Personnalisation du label
const CustomizedLabel = ({ cx, cy, value }) => {
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

export default function Score({ todayScore }) {
    const getData = () => {
        return [{ value: todayScore * 100, fill: 'red' }]
    }

    return (
        <RadialBarChart
            width={300}
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
                content={<CustomizedLegend />}
            />

            <RadialBar
                angleAxisId={0}
                dataKey="value"
                label={<CustomizedLabel />}
            />
        </RadialBarChart>
    )
}
