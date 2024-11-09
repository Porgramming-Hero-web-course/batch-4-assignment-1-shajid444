function countWordOccurrences(sentence: string, word: string): number {
    // Convert both sentence and word to lowercase to ensure case-insensitivity
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    const words = lowerCaseSentence.split(/\w+/);
    let count : number = 0;
    for(let i=0; i<words.length;i++) {
        if(lowerCaseWord === words[i])
            {
                count++;
            }
    }

   
    return count;
}

// Sample Input
console.log(countWordOccurrences("TypeScript  is  great. I love TypeScript!", "typescript")); 
