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
let N=parseInt(readLine());
let Sorting_map =new Map();
let Name = new Map();
let maximum_value=0;
for(let i=0;i<N;i++){
    let input=readLine().split(" ");
    if(!Name.has(input[0])){
        if(Sorting_map.has(input[1])){
            Sorting_map.set(input[1],Sorting_map.get(input[1])+1);
            maximum_value = Math.max(maximum_value,Sorting_map.get(input[1]));
        }else{
            Sorting_map.set(input[1],1);
        }
    }
        Name.set(input[0]);   
}
if(maximum_value===0){
    maximum_value =1;
}
let output=[];
for(let game of Sorting_map.keys()){
    if(Sorting_map.get(game)===maximum_value){
        output.push(game);
    }
}
if(output.length>1){
    output.sort();
}
console.log(output[0]);
if(Sorting_map.has("football")){
    console.log(Sorting_map.get("football"));
}else{
    console.log(0);
}



/* Question 
Max likes football very much. In order to check the popuplarity of the game, he decided to talk to random people and ask them about their favourite game and note it down in a list.

Given a list of name of people and their favourite sport, help Max in finding the sport liked by most of the people, and also how many people like football.

He could have met same people more than once, he will only count response of his first meet with any person.

Note : Name of person as well as sport is a single string in lowercase. Length of name of people as well as sport is less than 11.

Input
First line will contain no of entries in the list. i.e. N Next N lines will contain two strings, person's name and sports he like.

Output
In first ine, name of sport liked by most no of people (In case of more than one games is liked by highest no of people, output the first one in lexicographical order). In second line, no of people having football as their favourite game.

Example
Input:

7

abir cricket

aayush cricket

newton kabaddi

abhinash badminton

sanjay tennis

abhinash badminton

govind football

Output:

cricket

1

Explanation
2 people likes cricket, ans so it liked by maximum people. 1 person has football as his favourite sport

*/