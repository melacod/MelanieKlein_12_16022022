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
        ActivityTransform
    )
}

/**
 * Transform activity data received from backend.
 * Add a dayNumber property that match array position + 1
 * @function ActivityTransform
 * @param {number} data activity data received from backend
 * @returns activity data transformed
 * @category Services
 */
const ActivityTransform = (data) => {
    return data.data.sessions.map((session, indexSession) => {
        session.dayNumber = indexSession + 1
        return session
    })
}

export default ActivityService
