import { useFetch } from '../utils/hooks'

// Fonction permettant de récupérer les statistiques d'un utilisateur en interrogeant le backend
export function UserProvider(userId) {
    return useFetch('http://localhost:3000/user/' + userId)
}
