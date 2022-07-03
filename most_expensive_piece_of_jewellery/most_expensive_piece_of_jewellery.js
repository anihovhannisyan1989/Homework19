function mostExpensive(obj) {
    let sortedArr = Object.values(obj).sort((a, b) => b - a);
    for (let key in obj) {
        if (obj[key] == sortedArr[0])
            return `The most expensive one is the ${key}`;
    }
}

console.log(mostExpensive({
    "Diamond Errings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
}));

console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrins": 180,
    "Diamond Ring": 3500
}));