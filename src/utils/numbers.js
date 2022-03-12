/**
 * Format a number : add comma for thousands separator
 * @function NumberWithCommas
 * @param {number} myNumber number to format
 * @returns the formatted number
 * @category Utils
 */
const NumberWithCommas = (myNumber) => {
    return myNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default NumberWithCommas
