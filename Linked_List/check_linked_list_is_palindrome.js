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


class Node{ 
    constructor(value){ 
        this.data = value; 
        this.next = null;
    }
}
class LinkedList{ 
  constructor(){ 
      this.head = null;
  }
    push(new_value){ 
        let new_node = new Node(new_value)
        if(this.head === null){
            this.head = new_node;
            this.tail = new_node;
            return
        }
        this.tail.next = new_node;
        this.tail = new_node; 
    }
    isPalin(){
        //WRITE CODE HERE
         let current = this.head;
         let stack = [];
         while(current){
            stack.push(current.data)
            current = current.next
         }
        current = this.head;
       let ispalindrome = "True";
        while(current){
            let element = stack.pop()
            if(current.data===element){
                current = current.next
                continue
            }else{
                ispalindrome = "False"
                return ispalindrome
            }
        }
        return ispalindrome;
    }
}

function readListInput(){
    let vals = readLine().trim().split(" ").map(Number);
    linkedList = new LinkedList(); 
    for(let val of vals){
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for(let i=0;i<testCases;i++){
    let linkedList = readListInput();
    //console.log(linkedList.head)
    console.log(linkedList.isPalin());
}










/*

check linked list is palindrome
Given a singly linked list of integers, write a function that returns true if the given list is a palindrome, else false.

Input
First line is an integer T, representing total number of test cases. For each testcase, 1st line containing space separated integers of linked list from left to right.

Output
T lines, each line containing the result for each test case.

Example
Input: 2

1 2 2 1

1 1 1 1 2

Output: True

False

Explanation
For the first test case, 1 2 2 1 back walk also gives 1 2 2 1 so true

For the second test case, 1 1 1 1 2 back walk gives 2 1 1 1 1 so not same, will give output false


*/