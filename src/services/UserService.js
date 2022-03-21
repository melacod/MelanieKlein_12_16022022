import UserDataMock from '../mock/UserDataMock'
import UserData from '../model/UserData'
import { useFetch } from '../utils/hooks'
import BackendUrl from './BackendUrl'

/**
 * Get user data from backend and transform data received
 * @function UserService
 * @param {number} userId user identifier
 * @param {boolean} useMock use mock data or not
 * @returns the transformed user data
 * @category Services
 */
const UserService = (userId, userMock = true) => {
    const mockData = userMock ? UserDataMock : undefined
    return useFetch(BackendUrl + '/user/' + userId, UserTransform, mockData)
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
    return new UserData(data.data)
}

export default UserService
