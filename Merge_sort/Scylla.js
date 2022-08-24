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
let N_K = readLine().split(" ").map(Number)
let K=N_K[1] , Size = N_K[0]
let No_Gene = readLine().split(" ").map(Number)
No_Gene.sort((a,b)=>b-a)
let Secure_Value = Number.POSITIVE_INFINITY
for(let i=0;i<=(Size-K);i++){
        Secure_Value = Math.min(Secure_Value,Math.abs(No_Gene[i]-No_Gene[i+K-1])) 
}
console.log(Secure_Value)



/* Question 
Scylla
You have a very important piece of information that goes by the name "scylla". To secure the scylla, you have broken it up into "K" parts. each part if is expected to be with one of the generals. You have a total of N generals that live in N different locations along a road. For the best security you have to select any 'K' generals from the 'N' generals with whom the scylla shoud lie.

For a group of 'K' generals, with houses at (a1,a2,a3...ak), the security score value(S) is given as max(abs(ai-aj)).

S=max(abs(ai-aj))

A higher 'S' would mean a weaker security and a lower (S) would mean a higher security. What is the best(minimal) S value you can generate(i.e- which 'K' generals would you select that minimises the S value)

Note- no general can have more than 1 piece of scylla.

Constraints
1 <= N <=100000

1<=K<=N

Input
First line of the input contains N and K respectively(space separated). Second line contains the locations of the 'N' generals along the road i.e (a1,a2.....aN).

Output
Print the best 'S' value you can generate by choosing the best possible team of 'K' generals.

Example
Input:

5 3

5 4 7 8 1

Output:

3

Explanation:

if we choose the generals at 5,7,8(S=8-5=3) or the generals at 5,4,7(S=7-4=3) we get a S score of 3, which is the best we can get.

*/