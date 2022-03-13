import { useFetch } from '../utils/hooks'
import BackendUrl from './BackendUrl'

/**
 * Get user activity data from backend and transform data received
 * @function ActivityService
 * @param {number} userId user identifier
 * @returns the transformed activity user data
 * @category Services
 */
const ActivityService = (userId) => {
    return useFetch(
        BackendUrl + '/user/' + userId + '/activity',
        ActivityTransform,
        ActivityMock
    )
}

/**
 * Transform activity data received from backend.
 * Add a dayNumber property that match array position + 1
 * @function ActivityTransform
 * @param {object} data activity data received from backend
 * @returns activity data transformed
 * @category Services
 */
const ActivityTransform = (data) => {
    return data.data.sessions.map((session, indexSession) => {
        session.dayNumber = indexSession + 1
        return session
    })
}

/**
 * Mock activity data
 * @kind constant
 * @category Mock
 */
const ActivityMock = {
    data: {
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240,
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220,
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280,
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290,
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160,
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162,
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390,
            },
        ],
    },
}

export default ActivityService
