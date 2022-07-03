function makeBox(num) {
    let arrBox = [];
    if (num == 1) {
        return ["#"];
    } else {
        for (let i = 0; i < num; i++) {
            let j = 0;
            let newLine = "";
            while (j < num) {
                if (i == 0 || i == num - 1) {
                    newLine += "#";
                } else {
                    newLine += (j == 0 || j == num - 1) ? "#" : " ";
                }
                j++;
            }
            arrBox.push(newLine);
        }

    }
    return arrBox;
}

console.log(makeBox(5));
// 5 ➞ [
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
//   ]

console.log(makeBox(3));
//  3  ➞ [
//     "###",
//     "# #",
//     "###"
//   ]

console.log(makeBox(2));
//   2 ➞ [
//     "##",
//     "##"
//   ]

console.log(makeBox(1));
//   1 ➞ [
//     "#"
//   ]

console.log(makeBox(10));