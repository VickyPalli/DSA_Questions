let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let input=[];
let N=parseInt(readLine());
for(let i=0;i<N;i++){
    input.push(parseInt(readLine()));
}
let refernce=input.slice();
refernce.sort((a,b)=>(a-b));
let unique =new Map();
for(let i=0;i<N;i++){
    if(!unique.has(refernce[i])){
        unique.set(refernce[i],i);
    }
}
for(let i=0;i<N;i++){
    console.log(unique.get(input[i]));
}
