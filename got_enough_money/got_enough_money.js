function itemsPurchased(obj, str) {
    let canBuy = [];
    for (let key in obj) {
        if (Number(obj[key].slice(1)) <= Number(str.slice(1))) {
            canBuy.push(key);
        }
    }
    let result = (canBuy.length == 0) ? "Nothing" : canBuy.sort();
    return result;
}

console.log(itemsPurchased({
    Water: "$1",
    Bread: "$3",
    TV: "$1,000",
    Fertilizer: "$20"
}, "$300")); // ➞ ["Bread", "Fertilizer", "Water"]

console.log(itemsPurchased({
    Apple: "$4",
    Honey: "$3",
    Fan: "$14",
    Bananas: "$4",
    Pan: "$100",
    Spoon: "$2"
}, "$100")); // ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

console.log(itemsPurchased({
    Phone: "$999",
    Speakers: "$300",
    Laptop: "$5,000",
    PC: "$1200"
}, "$1")); // ➞ "Nothing"