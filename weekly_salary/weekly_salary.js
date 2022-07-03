function weeklySalary(arr) {
    let salary = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i <= 4) {
            salary += (arr[i] <= 8) ? (arr[i] * 10) : (80 + (arr[i] - 8) * 15);
        } else {
            salary += (arr[i] <= 8) ? (arr[i] * 20) : (160 + (arr[i] - 8) * 30);
        }
    }
    return salary;
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0])); // ➞ 400

console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0])); // ➞ 410

console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0])); // ➞ 280