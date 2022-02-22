import { RadarChart } from 'recharts'
import SportBar from '../layout/SportBar'
import SportStats from '../layout/SportStats'

import './Dashboard.css'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <SportBar />
            <SportStats />
            <RadarChart />
        </div>
    )
}
