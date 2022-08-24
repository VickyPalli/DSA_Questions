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
let Test = parseInt(readLine());
while(Test--){
    let N = parseInt(readLine())
    let Resultant_Arr = readLine().split(" ").map(Number)
    let Total_Diff = 0;
    let Max = Math.max(...Resultant_Arr)
    let output = MergeSort(Resultant_Arr,0,Resultant_Arr.length-1)
    function MergeSort(Arr,Start,End) {   
     if(Start<End){       
        let Middle = Math.floor((Start+End)/2)
        MergeSort(Arr,Start,Middle) 
        MergeSort(Arr,Middle+1,End)          
        return MergePart(Arr,Start,Middle,End)  
     }
    }
    
    function MergePart (Arr,Start,Middle,End) {  
     let Left_part_Size = Middle-Start+1  
     let Left_Sort = new Array(Left_part_Size) 
     let Right_Part_Size = End-Middle 
     let Right_Sort = new Array(Right_Part_Size)
     for(let i=0;i<Left_part_Size;i++){
        Left_Sort[i]=Arr[i+Start]  
     }
     for(let i=0;i<Right_Part_Size;i++){ 
        Right_Sort[i]=Arr[i+Middle+1]   
     }
     let pointer1=0, pointer2=0;
     while(pointer1<Left_Sort.length && pointer2<Right_Sort.length){
        Total_Diff+=Math.abs(Left_Sort[pointer1]-Right_Sort[pointer2])
        pointer1++
        if(pointer1===Left_Sort.length){
            pointer1=0;
            pointer2++
        }
     }
     let i=0,j=0,k=Start;   
     while(i<Left_part_Size && j<Right_Part_Size){    
        if(Left_Sort[i]<=Right_Sort[j]){
            Arr[k]=Left_Sort[i]    
            i++
        }else{
            Arr[k]=Right_Sort[j]
            j++
        }
        k++
     }
     while(i<Left_part_Size){
            Arr[k]=Left_Sort[i]
            i++
        k++
     }
     while(j<Right_Part_Size){
            Arr[k]=Right_Sort[j] 
            j++
        k++
     }
     return Arr;
    }
    console.log(Total_Diff*Max)
}



/* Question 
Horse Overtakes
Your task is to calculate the number of overtakes in a horse race. You are given data of the horses' velocities and their starting positions. The race length is extremely long, 10^(10000)

About the horses:

There are n horses
Each has in index from 0 to n-1
About the data:

Each horse has a velocity v, 0 <= v <= 10
eACh horse has a starting position in the race p, 0 <= p <= n-1
Each horse starting position is unique, i.e. no two horses have the same starting position
For convenience, we'll denote the starting position of horse with idx A as p[A] About starting positions:

A horse with a lower starting position implies it is farther away from the finish line
For horses A and B, if p[A] > p[B] then A is closer to the finish line
About overtakes:

An overtake is when a horse B finishes the race before A, and p[A] > p[B]
Input
The first line contains n, the number of horses This is followed by n lines, each containing 2 integers, position p and velocity v

Output
One line containing an integer indicating the number of overtakes that happened during the race

Example
Input:

6

1 7

3 10

0 5

4 3

5 7

2 4

Output:

7

Explanation
The first line is 6 indicating a total of 6 horses

The next lines contain the position and velocity of each horse

The output is the number of overtakes happening through the race, 7 and this is the value in the output

*/