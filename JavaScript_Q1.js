const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWords(sentence) {
    const words = sentence.split(' ');
    
    const reversedWords = words.map(word => {
       
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}


rl.question("Enter a sentence: ", (inputSentence) => {
    const reversedSentence = reverseWords(inputSentence);

    
    console.log(reversedSentence);

   
    rl.close();
});

