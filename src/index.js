const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr.split('');
    let prefinal = [];
    let result = [];
    let veryFinal = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        prefinal.push(expr.slice(i, i + 10))
    }
    for (let j = 0; j < prefinal.length; j++) {
        let arr = prefinal[j].toString().split('');
        for (let k = 0; k < arr.length; k = k + 2) {
            if (arr[k] == 1 && arr[k + 1] == 1) {
                result.push('-');
            }
            else if (arr[k] == 1 && arr[k + 1] == 0) {
                result.push('.');
            }
            else if (arr[k] == '*') {
                result.push(' ')
                k = k + 9;
            }
        }
        if (j < prefinal.length - 1) {
            result.push(';');
        }
    }
    var final = result.join("").split(';');
    for (let n = 0; n < final.length; n++) {
        let isSpace = false;
        for (let key of Object.keys(MORSE_TABLE)) {
            if (final[n] == key) {
                veryFinal.push(MORSE_TABLE[key])
            }
            else if (final[n] === ' ' && !isSpace) {
                isSpace = true;
                veryFinal.push(' ');
            }
        }
    }
    return veryFinal.join('').replace(/,/g, "");
}

module.exports = {
    decode
}