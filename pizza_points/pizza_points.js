function pizzaPoints(obj, minCount, minPrice) {
    let winners = [];
    for (let key in obj) {
        pricesArr = obj[key].filter(item => item >= minPrice);
        if (pricesArr.length >= minCount) {
            winners.push(key);
        }
    }
    return winners;

}

let customersObj = {
    "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
    "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
}

console.log(pizzaPoints(customersObj, 5, 20)); //➞ ["Spider-Man"]

console.log(pizzaPoints(customersObj, 3, 10)); //➞ ["Batman", "Spider-Man"]

console.log(pizzaPoints(customersObj, 5, 100)); //➞ []