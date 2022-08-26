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
let testcases = parseInt(readLine())
class Node{
    constructor(element){
        this.data = element;
        this.next=null;
    }
}
class LinkedList{
   constructor(){
    this.head = null;
    this.size=0;
   }
   insertNode(element){
    let node = new Node(element)
    if(this.head===null){
        this.head = node
    }else{
        let current = this.head;
        while(current.next!==null){
            current = current.next
        }
        current.next = node
    }
    this.size++
   }
   findNthNode(pos){
    if(pos===0 || pos>this.size){
        return "None"
    }
     let i=1;
     let current = this.head
     while(i<pos){
       current = current.next
       i++
     }
     return (current.data)
   }
}
while(testcases--){
    let input = readLine().split(" ").map(Number)
    let L1 = new LinkedList()
    for(let i=0;i<input.length;i++){
        L1.insertNode(input[i])
    }
    let index = parseInt(readLine())
    console.log(L1.findNthNode(index))

}








/*

find nth node in linkedlist
Write a function that takes a linked list and an integer index and returns the data value stored in the node at that index position. If index doesnot exist return None.

Input
First line is an integer T, representing total number of test cases. For each testcase, 1st line containing space separated integers of linked list from left to right. For each testcase, 2nd line containing index to be found.

Output
T lines, each line containing the node value for each test case.

Example
Input: 2

2 2 4 5 6

4

11 1 1 1 3

0

Output: 5

None


*/






//Question
/*
find nth node in linkedlist
Write a function that takes a linked list and an integer index and returns the data value stored in the node at that index position. If index doesnot exist return None.

Input
First line is an integer T, representing total number of test cases. For each testcase, 1st line containing space separated integers of linked list from left to right. For each testcase, 2nd line containing index to be found.

Output
T lines, each line containing the node value for each test case.

Example
Input: 2

2 2 4 5 6

4

11 1 1 1 3

0

Output: 5

None
*/