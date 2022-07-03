function rgbToHex(str) {
    color = "#";
    let toHex = str.slice(4, str.length - 1).split(",").map(item => Number(item).toString(16));
    for (let item of toHex) {
        if (item.length == 1) {
            item += item;
        }
        color += item;
    }
    return color;
}


console.log(rgbToHex("rgb(0, 128, 192)")); //➞ "#0080c0"

console.log(rgbToHex("rgb(45, 255, 192)")); //➞ "#2dffc0"

console.log(rgbToHex("rgb(0, 0, 0)")); //➞ "#000000"