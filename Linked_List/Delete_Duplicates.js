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
// # JS program program to detect loop in the linked list 

// # Node class 
class Node{ 

//Constructor to initialize the node object 
	constructor(data){ 
		this.data = data; 
		this.next = null;
}
}
class LinkedList{
// Function to initialize head 
    constructor(){ 
        this.head = null
}
// # Do not change anything above this line

    detectLoop(data){
//         # YOU ONLY NEED TO COMPLETE THIS FUNCTION.
//         # RETURN 1 IF LOOP IS THERE IN THE LINKED LIST, ELSE RETURN 0
           let set = new Set()
           let current = data.head,previous = null;
           while(current){
            //console.log(current)
            if(set.has(current.data)){
                 previous.next = current.next;
            }else{
                set.add(current.data)
                previous = current;
            }
            current = current.next;
           }        
}

printList(data){
   let str = "";
   let current = data.head;
   while(current){
    str+=current.data+" ";
    current = current.next
   }
   console.log(str)
}
}

// Do not change anything below this line

//converting strings to integers
function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i])
    }
    return ar
}


let n = parseInt(readLine());
// Start with the empty list 
let llist = new LinkedList(); 
let ar = readLine().trim().split(" ");
let temp = ConvertToIntegers(ar);
// let temp = [int(x) for x in input().split()]
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
    curr = curr.next
}
llist.detectLoop(llist)
llist.printList(llist);



/*


Delete Duplicates
Description
Given an unsorted linked list of N nodes. The task is to remove duplicate elements from this unsorted Linked List. When a value appears in multiple nodes, the node which appeared first should be kept, all others duplicates are to be removed. You need to implement remove duplicates function only.

Input
First line contains an integer N denoting the size of the Linked List.

Next line contain N space separated integers dentoing the LL.

Output
Print the final LL

Input:

5

1 1 2 2 5

Output:

1 2 5

*/