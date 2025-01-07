const removeFromArray = function removeFromArray(array, ...args) {
    return array.filter(x => !args.includes(x))
};


removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
// Do not edit below this line
module.exports = removeFromArray;
