function removeDuplicates(num: number[]): number[] {
    //assign a new array to push the unique element into the array
    const uniqueNumbers: number[] = []; 
    
    num.forEach(e => {
        // if the array element do not assign before into the array then push the element into the array
        if (!uniqueNumbers.includes(e)) {
            uniqueNumbers.push(e);
        }
    });
    return uniqueNumbers;
}

// Sample Input
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
