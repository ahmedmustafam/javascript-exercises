const reverseString = function(word) {
    let string = word;
    let reversed = "";
    for (let i = 0; i = string.length; i++) {
        let popped = string.at(-1);
        string = string.slice(0,-1);
        reversed += popped;
    }

    return reversed;

};

reverseString('123! abc! Hello, Odinite.');

// Do not edit below this line
module.exports = reverseString;
