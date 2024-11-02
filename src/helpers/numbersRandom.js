export const generateRandomId = (length = 8) => {
    return Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
};