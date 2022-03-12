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
    return useFetch(BackendUrl + '/user/' + userId)
}

export default UserService
