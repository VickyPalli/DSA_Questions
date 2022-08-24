let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'BankAccount' and method names as 'credit' and 'debit'
class BankAccount {
    constructor(balance=0){
        this.balance=balance;
    }
    credit(transactionAmount){
        if(transactionAmount>=0){
      this.balance=this.balance+transactionAmount;
    }
    }
    debit(transactionAmount){
        if(transactionAmount>=0){
        this.balance=this.balance-transactionAmount;
        }
   }
}



// DO NOT CHANGE ANYTHING BELOW THIS LINE

let n = parseInt(readLine());
let myAccount = new BankAccount();
for (let index = 0; index < n ; index++) {
  let currentTransaction = readLine().split(" ");
  let typeOfTransaction = currentTransaction[0];
  let transactionAmount = parseInt(currentTransaction[1]);
  if (typeOfTransaction === "d") {
    myAccount.debit(transactionAmount);
  } else {
    myAccount.credit(transactionAmount);
  }
}
console.log(myAccount.balance);








/*

Bank Account Credit and Debit -- Classes Practice Problems
Write a bank account class (BankAccount). It should have an instance variable called balance which holds the current value. Assume initial balance is 0. The class should have the following methods: credit and debit.

credit - takes an integer (>= 0) as input and increases the balance by that amount
debit - takes an integer (>= 0) as input and decreases the balance by that amount
Input
The first line contains an integer n, denoting the number of transactions. This is followed by n lines each containing 2 space separated inputs. The first input is either c (denoting credit) or d (denoting debit). The second input is a non-negative integer denoting the amount.

Note: You don't have to worry about reading input or printing output. The code for that is already provided.

Output
One integer, denoting the final balance of the account.

Example
Input:

3
c 100
c 500
d 200
Output:

400
The first line in input is 3, denoting 3 transactions.
First transaction is c 100, which means a credit of 100. So the balance will become 100 (because initial balance is 0).
Second transaction is c 500, which means a credit of 500. So the balance becomes 100 + 500 which is 600.
Third transaction is d 200, which means a debit of 200. So balance becomes 600 - 200, which is 400.
So, the final balance is 400.











Brick Volume
A brick manufacturer approached us to help him develop a program which calculates cost to manufacture bricks for him. Default dimensions of the block are length = 100 units, width = 60 units and height = 40 units. And to manufacture 1 cubic unit costs him 0.00005 rupees. Sometimes the customers might ask him to manufacture custom bricks. Customer can ask either to change width or height or both of them.

Now we have to take total bricks count and dimensions of the brick and return the cost to manufacture them.

First line contains bricks count.

Second line contains y z dimensions of brick, which are width and height.

y z can be any positive integer, if he chooses default values then he chooses -1 for that dimension.

Input
10

-1 50

First line N positive intger. Total number of bricks.

Here he choose width default value which is 60, and for height he choose 50

Output
Single line returning the cost. This will be integer rounded to the closest integer.

Example
Input:

10

-1 30

Output:

90

Length will always be 100. If first element is -1 then width is 60, if second element is -1 then height is 40. He can choose one of them as -1 or both of them.

solution -----






let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}



// -------- Do NOT edit anything above this line ----------

// You should fill this functions using the volume and calculatePrice functions defined below this.
// dimensions is a list with 2 values width and height respectively
// brickCount is int representing total bricks
function calculateTotalPriceOfBricks(dimensions, brickCount){
    let width=0;
    let height=0;
   if(dimensions[0]===-1 && dimensions[1]!=-1){
     width=60;
     height=dimensions[1];
   }else if(dimensions[0]!=-1 && dimensions[1]===-1){
      width=dimensions[0];
      height=40;
   }else if(dimensions[0]===-1 && dimensions[1]===-1){
        width=60;
        height=40;
   }else {
        width=dimensions[0];
        height=dimensions[1];
   }
   let brickvolume=volume(100,width,height);
   let totalvolume=brickCount*brickvolume;
   let output=calculatePrice(totalvolume);
   return  Math.round(output);
  
}





// Do not change anything below this line
function volume(length=100,width=60,height=40){
  return length*width*height;
}

function calculatePrice(volume, price=0.00005){
	return Math.floor(volume*price);
}
function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each]);
    }
    
}

let brickCount = parseInt(readLine());
dimensions = readLine().split(" ");
ConvertToNumber(dimensions);
totalPrice = calculateTotalPriceOfBricks(dimensions, brickCount);
console.log(totalPrice);
*/