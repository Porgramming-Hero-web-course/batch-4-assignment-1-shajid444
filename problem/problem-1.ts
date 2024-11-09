function sumArray(num: number[]): number {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}

const totalSum = sumArray([1, 2, 3, 4, 5]);
console.log(totalSum);
