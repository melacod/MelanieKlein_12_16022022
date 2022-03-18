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
                kilogram: 95,
                calories: 340,
            },
            {
                day: '2020-07-02',
                kilogram: 94,
                calories: 360,
            },
            {
                day: '2020-07-03',
                kilogram: 93,
                calories: 380,
            },
            {
                day: '2020-07-04',
                kilogram: 94,
                calories: 300,
            },
            {
                day: '2020-07-05',
                kilogram: 93,
                calories: 320,
            },
            {
                day: '2020-07-06',
                kilogram: 93,
                calories: 330,
            },
            {
                day: '2020-07-07',
                kilogram: 92,
                calories: 350,
            },
        ],
    },
}

export default ActivityService
