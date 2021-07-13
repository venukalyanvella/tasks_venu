
var input = 5;
const temp =[];
var id =0;

while(true){
  if(Math.round(id %2 )==1){
    temp.push(id)
  }
  if(temp.length == input){
    break;
  }
  id+=1
}

const output=[];
const limit = input %2 ==0 ? input-1: input;

var index= 0;

while(index<=limit){
if(index == limit){
  break;

}
output.push(temp[index])
if(output.length == input){
  break;
}
index +=1;

}

console.log('Final Result ', output)