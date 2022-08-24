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
function Repeated_target_sum (nums,target){
    let answer=[];
    let sub_Function = (nums,target,array,i) => {   
     if(target===0){
      answer.push(array.slice());
      return;
     }
     if(target<0){
         return ;
     }
     while(i<nums.length ){
             array.push(parseInt(nums[i]));
             sub_Function(nums,target-parseInt(nums[i]),array,i);
             if(nums[i]===nums[i+1]){
                nums.splice(i+1,1)
            }
            array.pop(); 
             i++;
              
     }
    }
    sub_Function(nums,target,[],0);
 return answer.length;   
}
let input=readLine().split(" ");
let target=parseInt(input[1]);
let nums=readLine().split(" ");
nums.sort((a,b)=>(a-b));
console.log(Repeated_target_sum(nums,target)); 

/* Question  
Repeated target SUM
You have been given an array of distinct integers and a "key". find out the total number of ways in which we can obtain the "key" by summing up one or more elements of the array such that one element from the array can be used multiple times.

[ordering of elements does not matter. i.e- {1,2,2,3} is same is {3,1,2,2} and thus they are considered as one]

Constraints
1<= N <= 10

0 < arr[i], elements are distinct

0 < key

Input
First line of the input contains N,key(space separated). second line of the input contains the N elements of the array.

Output
Print the total number of ways in which we can obtain "key" by summing up one or more elements of the array(repetition allowed)

Example
Input:

3 4

1 2 3

Output:

4

Explanation:

possible solutions- (1,1,1,1),(1,1,2),(1,3),(2,2)

*/







/* Questio  --- neighbours 

Neighbours
There are two groups of people, A and B. There is a lack of peace between the two, so to reduce this tension, a panel was made. A panel is basically a seating arrangement in which people from either A or B category can sit. However, the restriction imposed to increase communication between the two groups limit the people in the way they can sit.

At most 2 people from same group can sit adjacent to each other.
At a time any number of people from any group can be present in the panel.
Now you have been given a panel of size 'N'. You have to figure out all the valid seating arrangements. Lets say a person from 'A' is represented by 'a' and a person from 'B' is represented by 'b'. Print all such valid seating arrangements in lexicographically increasing order.(here it is same as sorted order)

ex- aabaabba is a valid seating arrangement as not more than 2 people from any group are adjacent. but aabbbab is not a valid seating arrangement as 3 b's are sitting adjacently.

Constraints
1<= N<= 30

Input
input contains 1 line which contains an integer N representing te size of the panel.

Output
Print all the possible valid seating arrangements possible(in form of a string of a's and b's) in lexicographically increasing order.

Example
Input:

4

Output:

aaba

aabb

abaa

abab

abba

baab

baba

babb

bbaa

bbab

Solution ------------
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
function Seating_arrangenemts(n){
let answer=[];
let Sub_Function = (a,b,str)=>{
if(str.length===n ){
    answer.push(str);
    return;
}
if(a<2){
    Sub_Function(a+1,0,str+"a")
}
if(b<2){
    Sub_Function(0,b+1,str+"b");
}
}
Sub_Function(0,0,"");
return answer;
}
let input=parseInt(readLine());
let output = Seating_arrangenemts(input);
for(let each of output){
    console.log(each);
}   



*/