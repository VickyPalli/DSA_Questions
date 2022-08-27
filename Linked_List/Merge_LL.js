let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1];
}
// -------- Do NOT edit anything above this line ----------
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.last_node = null
    }
    append(data) {
        if (this.last_node === null) {
            this.head = new Node(data)
            this.last_node = this.head
        }
        else {
            this.last_node.next = new Node(data)
            this.last_node = this.last_node.next
        }
    }
    display() {
        var current = this.head
        let res = []
        while (current) {
            res.push(current.data);
            current = current.next;
        }
        console.log(...res)
    }
}
function mergeLists(headA, headB) {
    //imlpement this function
    let currentA = headA , currentB = headB;
    let list = new LinkedList()
    while(currentA && currentB){
        if(currentA.data<currentB.data){
            list.append(currentA.data)
            currentA = currentA.next
        }else{
            list.append(currentB.data)
            currentB = currentB.next
        }
    }
    while(currentA){
        list.append(currentA.data)
        currentA = currentA.next
    }
    while(currentB){
        list.append(currentB.data)
        currentB = currentB.next
    }
    return list.head;
}
// Create 2 lists
var listA = new LinkedList()
var listB = new LinkedList()
// Add elements to the list in sorted order
let n1 = parseInt(readLine())
let l1 = readLine().trim().split(" ").map(Number)
let n2 = parseInt(readLine())
let l2 = readLine().trim().split(" ").map(Number)
for (i of l1) {
    listA.append(i)
}
for (i of l2) {
    listB.append(i)
}
// Call the merge function
listA.head = mergeLists(listA.head, listB.head)
// Display merged list
listA.display()











/*

Merge LL
Description
Given 2 sorted LL You need to merge them.

You just need to complete mergeLists function

Input
First line contains an integer N1 denoting the size of the 1st Linked List.

Second line contain N1 space separated integers dentoing the LL.

Third line contain an integer N2 denoting the size of 2nd LL.

Second line contain N2 space separated integers dentoing the LL.

Output
Print the mergerd list

Input:

3

2 3 5

4

1 4 6 7

Output:

1 2 3 4 5 6 7

*/