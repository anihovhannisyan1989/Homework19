function getStudentsWithNamesAndTopNotes(arr) {
    let topNotes = [];
    for (let item of arr) {
        let sortedNotes = item["notes"].sort((a, b) => b - a);
        if (sortedNotes.length == 0) {
            topNotes.push(0);
        } else {
            topNotes.push(sortedNotes[0]);
        }
    }

    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = {
            ["name"]: arr[i]["name"],
            ["topNote"]: topNotes[i]
        }
    }
    return newArr;
}

console.log(getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
]));