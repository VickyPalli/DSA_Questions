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
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
 
class LinkedList{
    constructor(){
        this.head = null;
        this.lastNode = null;
    }
    append(data){
        if (this.lastNode === null){
            this.head = new Node(data)
            this.lastNode = this.head
        }
        else{
            let node = new Node(data)
            let current = this.head;
            while(current.next!==null){
                   current = current.next
            }
            current.next = node
            this.lastNode = current.next
        }
}
}
function lengthLlist(llist){
    let length = 0;
    let current = llist.head;
    while(current){
        current = current.next;
        length = length + 1;
    }
    return length;
}
 
function returnNFromLast(llist, n){
   //Implement this
   let size = lengthLlist(llist)
   let pos = size - n
   let i=0;
   let current = llist.head
   while(i<pos){
       current = current.next;
       i++
   }
   return current.data
}
 

function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i]);
    }
    return ar;
}

let input= readLine().split(" ");
let N= parseInt(input[0]);
let n =parseInt(input[1]); 
let aLlist = new LinkedList()

let ar = readLine().split(" ")
let l = ConvertToIntegers(ar)
for(i of l){
    aLlist.append(i) 
}
let value = returnNFromLast(aLlist, n)
console.log(value);


/* Question

nth from back
Description
Given a Linked List and a number n, print the value at the n’th node from the end of the Linked List.

Where n > 0 and n <= N. N = length of the LL. You just need to implement return n_th_from_back.

Input
First line contains an integer N and n denoting the size of the Linked List and the required n-th node.

Next line contain N space separated integers dentoing the LL.

Output
Print a single integer i.e the n-th node from back

Input:

5 4

1 2 3 4 5

Output:

2



*/