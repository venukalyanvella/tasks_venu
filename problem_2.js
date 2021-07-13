var input = 2;
const output = [];
for (let i = 0; i <= Infinity; i++) {
    if (Math.round(i % 2) == 1) {
        output.push(i);
    }
    if (output.length == input) {
        break;
    }
}
console.log('The Final Result is ', output);