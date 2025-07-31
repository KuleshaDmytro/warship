export const createArray = (length, callback) => { 
    return [...new Array(length)].map((_, i) => callback(i));
}