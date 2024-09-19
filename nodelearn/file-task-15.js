const { writeFileSync, readdirSync } = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files-task15');

// creating 5 files in a particular directory
// for (i = 0; i <= 4; i++) {
//     writeFileSync(`${dirPath}/hello${i}.txt`, 'i am a text file written using Node.js');
// }

// reading how many files available present in a particular directory
const listFiles = readdirSync(dirPath);
console.log(listFiles);

// we can only access files using node in the project directory. outside project folder, we cannot access or delete files. (confirm it)