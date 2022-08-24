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
let No_cars = parseInt(readLine())
let Prices = readLine().split(" ").map(Number)
let Quality = readLine().split(" ").map(Number)
let Resultant_Arr = []
for(let i=0;i<No_cars;i++){
    Resultant_Arr.push([Prices[i],Quality[i]])
}
let flag = true;
let out = Mergesort(Resultant_Arr,0,Prices.length-1)
function Mergesort(Arr,start,end){
  let Sorted = []
  if(start===end){
    Sorted[0]=Arr[start]
    return Sorted
  }
  let Left_s = start;
  let Left_e = Math.floor((start+end)/2)
  let Right_s = Left_e+1;
  let Right_e = end;
  let Left_Sort = Mergesort(Arr,Left_s,Left_e)
  let Right_Sort = Mergesort(Arr,Right_s,Right_e)
  let i=0,j=0,k=0;
  while(i<Left_Sort.length && j<Right_Sort.length){
    if(Left_Sort[i][0]<=Right_Sort[j][0]){
        if(Left_Sort[i][1]>Right_Sort[j][1]){
            flag = false;
        }
        Sorted[k]=Left_Sort[i]
        i++,k++
    }else{
        if(Left_Sort[i][1]<Right_Sort[j][1]){
            flag = false
        }
        Sorted[k]=Right_Sort[j]
        j++,k++
    }
  }
  while(i<Left_Sort.length){
        Sorted[k]=Left_Sort[i]
        i++,k++
  }
  while(j<Right_Sort.length){
        Sorted[k]=Right_Sort[j]
        j++,k++
  }
  return Sorted;
 }
if(flag){
    console.log("Lucy")
}else{
    console.log("Mark")
}

/* Question  
All that glitters
Mark and lucy have to buy a car. However there is some confusion regarding which car to buy. lucy believes that if the price of a car is high it is bound to be high in terms of quality too. Mark however believes that a higher price os not a guarantee of a higher quality and such pairs of car exist which has price1 > price2 but quality1 < quality2. They have a manual in which car prices of 'N' cars are given alongwith a quality score value. Formally speaking for their logics.

Lucy says for all (i,j), if price[i]<= price[j] then always quality[i]<= quality[j].
Mark says there might exist some (i,j), if price[i]<= price[j] but quality[i]> quality[j].
Can you help them resolve this doubt, by finding out who is right?

Constraints
2 <= N <= 100000

Input
First line contains the value of N(total number of cars). second line contains N space separated values which represent the prices of the N cars. Third line contains N space separated values which represent the quality of the N cars given in the second line in the same order the cars occur. i.e- for some index i, price[i]->price of car i, quality[i]=quality of car i.

Output
Print either "Mark" or "Lucy" depending on who among the two is correct.

Example
Input1:

5

4 10 2 3 9

20 50 10 12 40

Output1:

Lucy

Explanation1:

for all the cars given in the manual there exists no such pair for which price1< price2 and quality1>quality2

Input2:

4

5 6 1 9

2 3 9 6

Output2:

Mark

Explanation2:

price car 2(6)>price of car 3(1) but quality of car 2 (3)is < quality of car 3(9)

*/