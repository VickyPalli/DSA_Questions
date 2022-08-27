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


// JS program to delete M nodes after N nodes 

// Node class  
class Node {

    //Constructor to initialize the node object 
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {

    // Function to initialize head 
    constructor() {
        this.head = null;
    }
    // Function to insert a new node at the beginning 
    push(newData) {
        let newNode = new Node(newData);
        newNode.next = this.head;
        this.head = newNode;
    }
    // Utility function to prit the linked LinkedList 
    printList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data + ' ');
            temp = temp.next
        }
    }
    skipMdeleteN(M, N) {
        // Implment This 
        let previous = null, current = this.head;
        let count = 0;
        while (current) {
            if (count === M) {
                let count1 = 0;
                while (count1 < N && current) {
                    current = current.next
                    count1++
                }
                count = 0;
                previous.next = current;
                previous = current;
                if (current) {
                    current = current.next
                }
            } else {
                previous = current
                current = current.next;
            }
            count++;
        }
    }
}

// Driver program to test above function 
function convertToNumber(ar) {
    for (let i = 0; i < ar.length; i++) {
        ar[i] = parseInt(ar[i])
    }
    return ar
}

let n = parseInt(readLine());
let input = readLine().split(" ");
let M = parseInt(input[0]);
let N = parseInt(input[1]);
let llist = new LinkedList();
let ar = readLine().split(" ");
let l = convertToNumber(ar);
l.reverse();
for (i of l) {
    llist.push(i);
}
llist.skipMdeleteN(M, N);
llist.printList();




/*


Skip M delete N
Description
Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

You only need to implement a Function in the template.

Input
For each testcase, first line of input contains number of elements in the linked list and next M and N respectively space separated. The last line contains the elements of the linked list.

Output
Print the final LL

Input:

8

2 1

9 1 3 5 9 4 10 1

Output:

9 1 5 9 10 1

*/