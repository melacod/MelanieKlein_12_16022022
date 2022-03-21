import IntensityMock from '../mock/IntensityMock'
import IntensityData from '../model/IntensityData'
import { useFetch } from '../utils/hooks'
import BackendUrl from './BackendUrl'

/**
 * Get user intensity data from backend and transform data received
 * @function IntensityService
 * @param {number} userId user identifier
 * @param {boolean} useMock use mock data or not
 * @returns the transformed intensity user data
 * @category Services
 */
const IntensityService = (userId, useMock = false) => {
    const mockData = useMock ? IntensityMock : undefined
    return useFetch(
        BackendUrl + '/user/' + userId + '/performance',
        IntensityTransform,
        mockData
    )
}

/**
 * Transform intensity data received from backend.
 * Add a kindText property that contains the french kind text from the kind id.
 * @function IntensityTransform
 * @param {object} data intensity data received from backend
 * @returns intensity data transformed
 * @category Services
 */
const IntensityTransform = (data) => {
    return data.data.data.map((obj) => {
        const englishKindText = data.data.kind[obj.kind]
        const frenchKindText = IntensityTranslate(englishKindText)
        return new IntensityData(obj.value, frenchKindText)
    })
}

/**
 * Translate english kind text to french kind text.
 * If no translation found, return english kind text.
 * @function IntensityTranslate
 * @param {string} kindText english kind text
 * @returns french kind text
 * @category Services
 */
const IntensityTranslate = (kindText) => {
    if (kindText === 'cardio') return 'Cardio'
    if (kindText === 'energy') return 'Energie'
    if (kindText === 'endurance') return 'Endurance'
    if (kindText === 'strength') return 'Force'
    if (kindText === 'speed') return 'Vitesse'
    if (kindText === 'intensity') return 'Intensité'
    return kindText
}

export default IntensityService
