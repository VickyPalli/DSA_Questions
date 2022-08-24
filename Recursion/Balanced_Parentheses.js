let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function getAllBalancedParan(n){
    // Implement this function
    let output=[];
    
    let Sub_Function =(open,close,str)=>{
        if(open===n && close===n){
            output.push(str);
            return ;
        }
        if(open<n){
              Sub_Function(open+1,close,str+"(");
        }
        if(close<n){      
              Sub_Function(open,close+1,str+")");
        }
    }
    Sub_Function(0,0,"");  
    return output;
}

// Do not edit anything below
let n = parseInt(readLine());
let allBalancedParan = getAllBalancedParan(n);
allBalancedParan.sort();
for(expr of allBalancedParan){
    console.log(expr);
}


/* Question  
Balanced Parentheses
Description
Write a program to generate all the distinct valid combinations that are possible using n pairs of parentheses.

Input/Output format
You only need to implement the getAllValidCombinations function provided in the template. The template takes care of reading the input, passing it on to getAllValidCombinations function and printing the result.

Sample input
3
Sample output
((()))
(()())
(())()
()(())
()()()
*/