// Fonction permettant de transformer un nombre en chaine de caractères
// et d'ajouter une virgule comme séparateur
export function NumberWithCommas(myNumber) {
    return myNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
