import Stats from '../components/Stats'
import './SportStats.css'

export default function SportStats({ userId }) {
    return (
        <div className="sportStats">
            <Stats userId={userId} />
        </div>
    )
}
