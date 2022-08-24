let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// DEFINE YOUR CLASS HERE
class HopRacing {
    constructor(){
        this.count=0;
        this.round =0;
    }
    jumpPosition(hopAmount){
         this.count+=hopAmount;
         this.round+=1;
    }
    getPosition(){
      return this.count;
    }
    getRounds(){
      return this.round;
    }
}




// DO NOT EDIT ANYTHING BELOW THIS LINE

let Num = parseInt(readLine());
let HopRacer1 = new HopRacing();
let HopRacer2 = new HopRacing();



for (let i = 0; i < Num; i++) {
  let input = readLine().split(" ");
  let ID = parseInt(input[0]);
  let hopAmount = parseInt(input[1])

  if (ID === 1) {
    HopRacer1.jumpPosition(hopAmount);
  } else {
    HopRacer2.jumpPosition(hopAmount);
  }
}

if (
  HopRacer1.getPosition() >= 10 &&
  HopRacer1.getRounds() <= HopRacer2.getRounds()
) {
  console.log(1);
} else if (
  HopRacer2.getPosition() >= 10 &&
  HopRacer1.getRounds() > HopRacer2.getRounds()
) {
  console.log(2);
}




/* 

hop racing JS
Two friends 1 and 2 are participating in a hop race. The hop race consists of different rounds. In each round, each hopper can hop as many steps as they want. Both hoppers start at 0 and the finish line is at 10. You are judging the hop race and your goal is to find out which friend takes the least number of rounds to reach the finish line. You are given access to data which has the number of hops each hopper takes in each round.
Design a class for the hopper HopRacing
This class is common for both the hoppers. Each of the hopper is an object for this class.
Your class should take input data provided for each hopper separately (each object should take data for one hopper). You should have 2 objects each representing one hopper
Write a method jumpPosition which calculates the hoppers position
Write a method getPosition which gets the current position of the hopper
Write a method getRounds which gets the number of rounds that hopper took to get to the finish line.

Input
First line contains n which specifies the number of rows of data given to you.
n lines containing steps taken by the both the hoppers. Each line consists of 2 integers separated by space.
First Integer denotes the hopper ID.
Second Integer denotes the number of hops that hopper took in that round.

Both the hoppers take steps in each round. Each round consists of hops taken by both 1st and 2nd hopper until one of them reaches the end line.
If both the hoppers took the same number of rounds, please announce that 1 is the winner.

Output
One line containing the ID of the hopper who won the race.

Example
Input:

8
1 5
2 2
1 1
2 5
1 2
2 3
1 1 
1 2
Output:

2
explanation First line contains 8 which means there are 8 lines to parse after this line.
Second line contains 1 5 which denotes that 1st hopper took 5 hops in the first round.
Third line contains 2 2 which denotes that 2nd hopper took 2 hops in the first round.
Fourth line contains 1 1 which denotes that 1st hopper took 1 hop in the second round.
Fifth line contains 2 5 which denotes that 2nd hopper took 5 hops in second round.
Sixth line contains 1 2 which denotes that 1st hopper took 2 hops in the third round.
Seventh line contains 2 3 which denots that that 2nd hopper took 3 hops in the third round and reached the finish line.
Eighth line contains 1 1 which denotes that 1st hopper took 1 hop in the fourth round.
Ninth line contans 1 2 which denotes that 1st hopper took 2 hops in the fifth round and reached the finish line.

1st hopper took 5 rounds to reach the finish line and 2nd hopper took 3 rounds to reach the finish line. So 2nd hopper wins and output is 2.

*/