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
let N=parseInt(readLine());
for(let i=0;i<N;i++){
    let No_of_stars =parseInt(readLine());
    let list = readLine();
    let unique = new Map();
    let count=0;
    for(let j=0;j<No_of_stars;j++){
        if(unique.has(list[j])){
            unique.set(list[j],unique.get(list[j])+1);
            count+=unique.get(list[j]);
        }else{
            unique.set(list[j],0);
        }
    }
    console.log(count);
}



/* Question 
Counting Stars
One day Professor Xavier saw alphabets appearing on the stars. He was so fascinated by them that he started making a list of numbers and for every new star, he inserted a number X into the list. This X is equal to the no. of times the alphabet on the current star has previously appeared.

After seeing N stars, he decided to stop and calculate the sum of all the N numbers.

Professor Xavier has spent all his life watching stars and do not know how to add. Can you help him in finding the sum?

Input
The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.

The first line contains a single integer – N, denoting the number of stars.

The next line contains a string S of length N, describing the characters that appeared on the N stars sequentially.

Output
For each query, print a single line containing one integer – the sum of all the N numbers.

Example
Input: 1

5

abaab

Output:

4

Explanation
There are 5 stars.

The list (say L) is initially empty. L = {}.

The 1st star had alphabet ‘a’ on it. Since ‘a’ has not appeared previously, 0 is inserted in the list. L = {0}.

The 2nd star had alphabet ‘b’ on it. Since ‘b’ has not appeared previously, 0 is inserted in the list. L = {0, 0}.

The 3rd star had alphabet ‘a’ on it. Since ‘a’ has previously appeared 1 time, 1 is inserted in the list. L = {0, 0, 1}.

The 4th star had alphabet ‘a’ on it. Since ‘a’ has previously appeared 2 times, 2 is inserted in the list. L = {0, 0, 1, 2}.

The 5th star had alphabet ‘b’ on it. Since ‘b’ has previously appeared 1 time, 1 is inserted in the list. L = {0, 0, 1, 2, 1}.

Sum of all elements in L = 4.

*/