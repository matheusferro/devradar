module.exports = function StringToArray(stringArray) {
    return stringArray.split(',').map(tech => tech.trim());
}