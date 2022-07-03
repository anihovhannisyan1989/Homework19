function uncensor(str, missingLetters) {
    let j = 0;
    let newString = "";
    if (missingLetters == "") {
        return str;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "*") {
                newString += missingLetters[j];
                j++;
            } else {
                newString += str[i];
            }
        }
        return newString;
    }
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")); // ➞ "Where did my vowels go?"

console.log(uncensor("abcd", "")); // ➞ "abcd"

console.log(uncensor("*PP*RC*S*", "UEAE")); // ➞ "UPPERCASE"