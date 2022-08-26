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




//  JS program to detect loop in the linked list 

// Node class 
class Node{ 
    // Constructor to initialize the node object 
    constructor(data){ 
 		this.data = data; 
 		this.next = null;
    }
}
class LinkedList{
// # Function to initialize head 
     constructor(){ 
         this.head = null;
     }
//  Do not change anything above this line

     detectLoop(data){
//         # YOU ONLY NEED TO COMPLETE THIS FUNCTION.
//         # RETURN 1 IF LOOP IS THERE IN THE LINKED LIST, ELSE RETURN 0
       let current = data.head;
       let set = new Set()
       let result = 0;
       while(current){
          if(set.has(current)){
            return 1
          }else{
            set.add(current)
          }
          current = current.next;
       }
       return result;
}
}
function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i])
    }
    return ar
}

//  Do not change anything below this line
    
let n = parseInt(readLine());

// Start with the empty list 
let llist = new LinkedList() ;
let ar = readLine().trim().split(" ").map(Number);
let temp=ConvertToIntegers(ar);
if(n<1){
    llist.head = null;
}
else if(n<2){
    llist.head = new Node(temp[0]);
}
else{
    llist.head = new Node(temp[0]);
    let second = new Node(temp[1]);
    llist.head.next = second;
    var curr = llist.head.next;
}

for(let i=2;i<n;i++){
    let t = new Node(temp[i]);
    curr.next = t;
    curr = curr.next;
}
let link = parseInt(readLine());
if(link!==-1){
        let t = llist.head;
         for(let i=0;i<link-1;i++){
            t = t.next;
         }
         curr.next = t;
}
console.log(llist.detectLoop(llist));


/*


Detect Loop
Given a head pointer to the linked list, check if the linked list has loop or not. If it has loop, function should return 1, else it should return 0.

Note:
This is a functional problem, so you don't need to worry about the input and output format. Simply take care of the detectLoop function.

Example & Explanation:
Suppose, given Linked List is:

76 -> 66 -> 11 -> 73 -> 77 
       ^                 |
       |_________________|  
Then, the output should be:

1
Because, the given linked list consists of a loop!


*/