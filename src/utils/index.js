/**
 * Checks for empty objects
 * @param {*} value object to checked
 *
 * @returns boolean
 */
export const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0);

export default isEmpty;