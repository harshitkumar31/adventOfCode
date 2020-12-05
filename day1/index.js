const fs = require('fs');

const inputFromFile = fs.readFileSync(__dirname + '/input.txt').toString().split('\r\n').map(e => parseInt(e, 10));
console.log(inputFromFile);
// const input = [1721, 979, 366, 299, 675, 1456];

const findEntriesAndMultiply = (input, sum, startIndex = 0) => {
    const memo = new Set();
    for (let i = 0; i < input.length; i++) {
        if (memo.has(sum - input[i]))
            return (sum - input[i]) * input[i];
        memo.add(input[i]);
    }
    return null;
}

const findThreeEntriesAndMultiply = (inp, sum = 2020) => {
    for (let i = 0; i < inp.length; i++) {
        const result = findEntriesAndMultiply(inp, sum - inp[i], i + 1);

        if (result)
            return inp[i] * result;
    }
    return null;
}


// console.log(findEntriesAndMultiply(input, 2020));
console.log(findEntriesAndMultiply(inputFromFile, 2020));
console.log(findThreeEntriesAndMultiply(inputFromFile, 2020));
