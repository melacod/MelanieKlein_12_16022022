import { useFetch } from '../utils/hooks'
import BackendUrl from './BackendUrl'

/**
 * Get user data from backend and transform data received
 * @function UserService
 * @param {number} userId user identifier
 * @returns the transformed user data
 * @category Services
 */
const UserService = (userId) => {
    return useFetch(BackendUrl + '/user/' + userId, UserTransform)
}

/**
 * Transform user data received from backend.
 * Add a todayScore property from score property if does not exists.
 * @function UserTransform
 * @param {object} data user data received from backend
 * @returns user data transformed
 * @category Services
 */
const UserTransform = (data) => {
    if (!data.data.todayScore) data.data.todayScore = data.data.score
    return data
}

export default UserService
