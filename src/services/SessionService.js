import { useFetch } from '../utils/hooks'
import BackendUrl from './BackendUrl'

/**
 * Get user session data from backend and transform data received
 * @function SessionService
 * @param {number} userId user identifier
 * @returns the transformed session user data
 * @category Services
 */
const SessionService = (userId) => {
    return useFetch(
        BackendUrl + '/user/' + userId + '/average-sessions',
        SessionTransform
    )
}

/**
 * Transform session data received from backend.
 * Add a dayText property that contains the french first letter of the day.
 * @function SessionTransform
 * @param {object} data session data received from backend
 * @returns session data transformed
 * @category Services
 */
const SessionTransform = (data) => {
    return data.data.sessions.map((session) => {
        session.dayText = ''
        if (session.day === 1) session.dayText = 'L'
        if (session.day === 2) session.dayText = 'M'
        if (session.day === 3) session.dayText = 'M'
        if (session.day === 4) session.dayText = 'J'
        if (session.day === 5) session.dayText = 'V'
        if (session.day === 6) session.dayText = 'S'
        if (session.day === 7) session.dayText = 'D'
        return session
    })
}

export default SessionService
