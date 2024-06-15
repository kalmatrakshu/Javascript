const fs = require('fs');
const path = require('path');

// Path to the file
const filePath = path.join(__dirname, 'example.txt');

// Synchronous file read operation
const readFileSync = () => {
  const start = process.hrtime();
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const end = process.hrtime(start);
    console.log(`Synchronous read: ${data}`);
    console.log(`Time taken (sync): ${end[0]}s ${end[1] / 1000000}ms`);
  } catch (err) {
    console.error(`Error reading file synchronously: ${err}`);
  }
};

// Asynchronous file read operation
const readFileAsync = () => {
  const start = process.hrtime();
  fs.readFile(filePath, 'utf8', (err, data) => {
    const end = process.hrtime(start);
    if (err) {
      console.error(`Error reading file asynchronously: ${err}`);
    } else {
      console.log(`Asynchronous read: ${data}`);
      console.log(`Time taken (async): ${end[0]}s ${end[1] / 1000000}ms`);
    }
  });
};

// Run both functions
readFileSync();
readFileAsync();
