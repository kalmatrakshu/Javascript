const crypto = require('crypto');

// Sample data to hash
const data = 'This is some sample data to hash';

// Synchronous hash operation
const hashSync = () => {
  const start = process.hrtime();
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  const end = process.hrtime(start);
  console.log(`Synchronous hash: ${hash}`);
  console.log(`Time taken (sync): ${end[0]}s ${end[1] / 1000000}ms`);
};

// Asynchronous hash operation
const hashAsync = async () => {
  const start = process.hrtime();
  const hash = await new Promise((resolve, reject) => {
    crypto.pbkdf2(data, 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString('hex'));
    });
  });
  const end = process.hrtime(start);
  console.log(`Asynchronous hash: ${hash}`);
  console.log(`Time taken (async): ${end[0]}s ${end[1] / 1000000}ms`);
};

// Run both functions
hashSync();
hashAsync();
