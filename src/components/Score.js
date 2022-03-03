import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'

export default function Score({ todayScore }) {
    const getData = () => {
        return [{ value: todayScore * 100, fill: 'red' }]
    }

    return (
        <RadialBarChart
            width={200}
            height={200}
            innerRadius="60%"
            barSize={12}
            data={getData()}
            startAngle={180}
            endAngle={-180}
        >
            <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
            />
            <RadialBar angleAxisId={0} dataKey="value" />
        </RadialBarChart>
    )
}
