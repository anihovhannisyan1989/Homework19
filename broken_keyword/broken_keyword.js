function findBrokenKeys(correctPhrase, enteredPhrase) {
    wrongLetters = [];
    for (let i = 0; i < correctPhrase.length; i++) {
        if (correctPhrase[i] !== enteredPhrase[i] && !wrongLetters.includes(correctPhrase[i])) {
            wrongLetters.push(correctPhrase[i]);
        }
    }
    return wrongLetters;
}


console.log(findBrokenKeys("happy birthday", "hawwy birthday")); // ➞ ["p"]

console.log(findBrokenKeys("starry night", "starrq light")); // ➞ ["y", "n"]

console.log(findBrokenKeys("beethoven", "affthoif5")); // ➞ ["b", "e", "v", "n"]