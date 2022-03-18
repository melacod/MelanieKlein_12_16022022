import { useFetch } from '../utils/hooks'
import BackendUrl from './BackendUrl'

/**
 * Get user intensity data from backend and transform data received
 * @function IntensityService
 * @param {number} userId user identifier
 * @returns the transformed intensity user data
 * @category Services
 */
const IntensityService = (userId) => {
    return useFetch(
        BackendUrl + '/user/' + userId + '/performance',
        IntensityTransform,
        IntensityMock
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
        obj.kindText = frenchKindText
        return obj
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

/**
 * Mock intensity data
 * @kind constant
 * @category Mock
 */
const IntensityMock = {
    data: {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
        },
        data: [
            {
                value: 300,
                kind: 1,
                kindText: 'Cardio',
            },
            {
                value: 280,
                kind: 2,
                kindText: 'Energie',
            },
            {
                value: 120,
                kind: 3,
                kindText: 'Endurance',
            },
            {
                value: 80,
                kind: 4,
                kindText: 'Force',
            },
            {
                value: 100,
                kind: 5,
                kindText: 'Vitesse',
            },
            {
                value: 290,
                kind: 6,
                kindText: 'Intensité',
            },
        ],
    },
}

export default IntensityService
