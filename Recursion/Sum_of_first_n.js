let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function sumOfFirstN(n){
	//Implement this function
    if(n===1){
        console.log(1,1);
        return 1;
    }
    let sum_value= n+sumOfFirstN(n-1);
    console.log(n,sum_value);
    return sum_value;
}
let n = parseInt(readLine());
sumOfFirstN(n);




/* Question   

Sum of first n: Recursive
Description
Write a program that computes the sum of first n natural numbers. Your implementation should be recursive in nature. For a positive integer n, sum of first n natural numbers can be defined recursively as follows.

sumOfFirstN(n) = 1, if n is 1
               = n + sumOfFirstN(n-1), otherwise
Input format
One line containing a positive integer n.

Output format
n lines denoting the partial sums and the order in which the partial sums are computed. Each line contains two space separated integers i and pSum. pSum is the sum of first i natural numbers.

Sample input
5
Sample output
1 1
2 3
3 6
4 10
5 15
Explanation
Sum of first 5 natural numbers is computed as follows.

sumOfFirstN(5) = 5 + sumOfFirstN(4)
               = 5 + 4 + sumOfFirstN(3)
               = 5 + 4 + 3 + sumOfFirstN(2)
               = 5 + 4 + 3 + 2 + sumOfFirstN(1)
               = 5 + 4 + 3 + 2 + 1
               = 5 + 4 + 3 + 3
               = 5 + 4 + 6
               = 5 + 10
               = 15
sumOfFirstN(1) is resolved first and returns 1. Hence the first line of output is 1 1.
sumOfFirstN(2) is resolved next and returns 3. Hence the second line of output is 2 3.
sumOfFirstN(3) is resolved next and returns 6. Hence the third line of output is 3 6.
sumOfFirstN(4) is resolved next and returns 10. Hence the fourth line of output is 4 10.
sumOfFirstN(5) is resolved last and returns 15. Hence the fifth (and final) line of output is 5 15.




Question ----- Jumping Game

Jumping game
You are playing a jumping game. In a jumping game there are N panels(consecutive), each containing a powerful spring. Every spring has the capacity to make you jump K units(i.e if you are at panel i, it can get you directly to panel i+K in a single jump). However, you also have a choice of whether to use the spring or not. if you dont use it, you can jump exactly one unit(i.e if you are at panel i, you will get to panel i+1). You are at point A(first panel), and you have to go to point B(after the last panel). between A and B, N-1 panels are kept(each with a spring) with the jumping ability of each panel mentioned in form of an array of numbers. Find the minimum number of jumps to get from point A to point B or to region right of point B.


Constraints
1<= N <=30

1<= jump[i]<=20

Input
First line of the input contains a number N, denoting the number of panels between A and B. second line contains the N panel jumping values of the N panels(in order to get from A to B or anywhere right of B)

Output
find the minimum number of jumps to get from A to B and print it.

Example
Input1:

8

2 3 1 5 2 1 1 1

Output1:

3

Explanation1:

Best way is : use spring at index 0 to get to index 2. then use the spring at index 2 to get to index 3. then use the spring at index 3 to get directly to B.-> 3 jumps

Input2:

6

4 10 2 1 1 1

Output2:

2

Explanation2:

Best way is : dont use first spring at index 0, we get to index 1. use the spring at index 1 to get to B. -> 2 jumps

 Solution ======

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
let Given_size = parseInt(readLine());
let Array = readLine().split(" ").map(Number);
function Jumping_game(input,i){
if(i>=input.length){
    return 0;
}
let Way_1 = Jumping_game(input,i+input[i])+1;
let Way_2 = Jumping_game(input,i+1)+1;
return Math.min(Way_1,Way_2);
}
console.log(Jumping_game(Array,0))  






*/