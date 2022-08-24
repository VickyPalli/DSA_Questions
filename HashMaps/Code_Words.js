let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function Letter_Transforamation (Word){
let Code =new Map([["a",".-"],["b","-..."],["c","-.-."],["d","-.."],["e","."],["f","..-."],["g","--."],["h","...."],["i",".."],["j",".---"],["k","-.-"],["l",".-.."],["m","--"],["n","-."],["o","---"],["p",".--."],["q","--.-"],["r",".-."],["s","..."],["t","-"],["u","..-"],["v","...-"],["w",".--"],["x","-..-"],["y","-.--"],["z","--.."]]);
let str="";
for(let i=0;i<Word.length;i++){
    str+=Code.get(Word[i]);
}
return str;
}

let Test_cases=parseInt(readLine());
for(let i=0;i<Test_cases;i++){
    let input=readLine().split(" ");
    let map = new Map();
    for(let k=0;k<input.length;k++){
     map.set(input[k]);
    }
    let unique =new Map();
    for(let key of map.keys()){
        
        let converter = Letter_Transforamation (key);
        if(converter==="") continue;
        
        if(unique.has(converter)){
            unique.set(converter,unique.get(converter)+1);
        }else{
            unique.set(converter,1);
        }
    }
    console.log(unique.size); 
}


/* Question 
Code Words
Description
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Input format
First line contains a positive integer n, denoting the number of test cases. It is followed by n lines. Each of the n lines contains space separated words.

Output format
n lines containing the number of different transformations among all words we have.

Sample input
1
gin zen gig msg
Sample output
2
Explanation
The transformation of each word is:

"gin" -> "--...-."

"zen" -> "--...-."

"gig" -> "--...--."

"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

Note
The length of words will be at most 100000

Each words[i] will have length in range [1, 12].

words[i] will only consist of lowercase letters.

*/