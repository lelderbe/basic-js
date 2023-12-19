const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    content: [],
    getLength() {
        return this.content.length;
    },
    addLink(value) {
        const newValue = value === undefined ? '' : value;
        this.content.push(newValue);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
            this.content = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.content.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.content = this.content.reverse();
        return this;
    },
    finishChain() {
        const result = this.content.map((item) => `( ${item} )`).join('~~');
        this.content = [];
        return result;
    },
};

module.exports = {
    chainMaker,
};
