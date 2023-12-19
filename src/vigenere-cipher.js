const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
    }

    _process(message, key, sign = 1) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const startPos = sign > 0 ? 0 : 26;
        const firstLetterCode = 'A'.charCodeAt();

        let result = '';
        let keyIndex = 0;
        for (let i = 0; i < message.length; i++) {
            const char = message[i].toUpperCase();

            if (char < 'A' || char > 'Z') {
                result = result + char;
                continue;
            }

            const shift = key[keyIndex % key.length].toUpperCase().charCodeAt() - firstLetterCode;
            const encodedChar = letters[startPos + char.charCodeAt() - firstLetterCode + sign * shift];
            result = result + encodedChar;
            keyIndex++;
        }
        return this.type ? result : result.split('').reverse().join('');
    }

    encrypt(message, key) {
        return this._process(message, key, 1);
    }

    decrypt(message, key) {
        return this._process(message, key, -1);
    }
}

module.exports = {
    VigenereCipheringMachine,
};
