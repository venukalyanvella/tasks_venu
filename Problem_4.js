
var input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = {};

for(var num = 1; num <=9; num++){
  output[num]=0;
for(const item of input){
  if(item % num ==0){
    output[num]+=1;
  }
}
}

console.log('Problem 4 output isss', output);