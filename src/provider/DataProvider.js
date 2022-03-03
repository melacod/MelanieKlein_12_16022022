import { useFetch } from '../utils/hooks'

// Fonction permettant de récupérer l'URL root du backend
export function BackendUrl() {
    return 'http://localhost:3000'
}

// Fonction permettant de récupérer les statistiques d'un utilisateur en interrogeant le backend
export function UserProvider(userId) {
    return useFetch(BackendUrl() + '/user/' + userId)
}

// Fonction permettant de récupérer les activités d'un utilisateur en interrogeant le backend
export function UserActivityProvider(userId) {
    return useFetch(BackendUrl() + '/user/' + userId + '/activity')
}

// Fonction permettant de récuprérer les durée moyenne des sessions d'un utilisateur en interrogeant le backend
export function UserSessionsProvider(userId) {
    return useFetch(BackendUrl() + '/user/' + userId + '/average-sessions')
}

// Fonction permettant de récupérer les performances(intensité) d'un utilisateur en interrogeant le backend
export function UserIntensityProvider(userId) {
    return useFetch(BackendUrl() + '/user/' + userId + '/performance')
}
