const fs = require('fs');

console.log('Starting automated tests...');

if (!fs.existsSync('index.html')) {
    console.error('Test failed: index.html not found');
    process.exit(1);
}

const html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('<html')) {
    console.error('Test failed: HTML structure not found');
    process.exit(1);
}

if (!html.includes('</html>')) {
    console.error('Test failed: closing HTML tag not found');
    process.exit(1);
}

console.log('Test passed: index.html exists');
console.log('Test passed: HTML structure is present');
console.log('All automated tests passed');
