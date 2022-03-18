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
    return useFetch(BackendUrl + '/user/' + userId, UserTransform, UserMock)
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

/**
 * Mock user data
 * @kind constant
 * @category Mock
 */
const UserMock = {
    data: {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.4,
        keyData: {
            calorieCount: 2820,
            proteinCount: 450,
            carbohydrateCount: 350,
            lipidCount: 250,
        },
    },
}

export default UserService
