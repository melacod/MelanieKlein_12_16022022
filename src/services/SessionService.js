import { useFetch } from '../utils/hooks'
import BackendUrl from './BackendUrl'
import SessionMock from '../mock/SessionMock'
import SessionData from '../model/SessionData'

/**
 * Get user session data from backend and transform data received
 * @function SessionService
 * @param {number} userId user identifier
 * @param {boolean} useMock use mock data or not
 * @returns the transformed session user data
 * @category Services
 */
const SessionService = (userId, useMock = false) => {
    const mockData = useMock ? SessionMock : undefined
    return useFetch(
        BackendUrl + '/user/' + userId + '/average-sessions',
        SessionTransformer,
        mockData
    )
}

/**
 * Transform session data received from backend.
 * Add a dayText property that contains the french first letter of the day.
 * @function SessionTransformer
 * @param {object} data session data received from backend
 * @returns session data transformed
 * @category Services
 */
const SessionTransformer = (data) => {
    return data.data.sessions.map((session) => {
        let dayText = ''
        if (session.day === 1) dayText = 'L'
        if (session.day === 2) dayText = 'M'
        if (session.day === 3) dayText = 'M'
        if (session.day === 4) dayText = 'J'
        if (session.day === 5) dayText = 'V'
        if (session.day === 6) dayText = 'S'
        if (session.day === 7) dayText = 'D'
        return new SessionData(dayText, session.sessionLength)
    })
}

export default SessionService
