const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getInputArray(inputString) {
    const inputArray = inputString.split(',').map(item => Number(item.trim()));
    return inputArray;
}

rl.question("Enter a comma-separated list of numbers: ", (inputString) => {
    const inputArray = getInputArray(inputString);

   
    inputArray.sort((a, b) => b - a);

  
    console.log("Sorted Array (Descending Order):", inputArray);

    
    rl.close();
});
