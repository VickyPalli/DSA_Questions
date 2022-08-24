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
// your class name should be 'Movie' and method names as 'certify' and 'run'
class Movie {
    constructor(lengthInMinutes, numCharacters, language){
        this.lengthInMinutes=lengthInMinutes;
        this.numCharacters=numCharacters;
        this.language=language;
    }
    certify(){
        if(numCharacters>=2 && lengthInMinutes<=240){
            return true;
        }else {
            return false;
        }
    }
    run(){
     let factor= this.certify()
     if(factor===true){
        return ("This is a "+ language +" movie with "+ numCharacters +" characters and is "+ lengthInMinutes +" minutes long,"+" and is certified.");   
     }else{
    return ("This is a "+ language +" movie with "+ numCharacters +" characters and is "+ lengthInMinutes +" minutes long,"+" and is not certified.");
     }
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE


let language = readLine();
let numCharacters = parseInt(readLine());
let lengthInMinutes = parseInt(readLine());

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());

/*

[JS] Movie Description extension - Classes Practice Problems
Recall the Movie class you defined in one of the previous problems. Its description is given below for your reference.

Previous description
Write a Movie class for which you can create movie objects. The objects should have the following variables: lengthInMinutes, numCharacters, language. The class should have a run method which prints out: "This is a language movie with numCharacters characters and is lengthInMinutes minutes long."

Now, we want to enhance the Movie class by adding a method to certify the movie.

Current description
Enhance the Movie class by adding a method certify, which returns true or false. It should return true if the movie has at least 2 characters and is less than or equal to 4 hours long (which means the movie is certified). Otherwise, it should return false. Modify the run message to include the certification.

If certified then the message should be "This is a language movie with numCharacters characters, is lengthInMinutes minutes long and is certified."
If not certified then the message should be "This is a language movie with numCharacters characters, is lengthInMinutes minutes long and is not certified."
Input format
First line is a string, denoting the language of the movie Second line is an integer, denoting the number of characters Third line is an integer, denoting the length in minutes

Output format
If certified then the output should be "This is a language movie with numCharacters characters, is lengthInMinutes minutes long and is certified."
If not certified then the output should be "This is a language movie with numCharacters characters, is lengthInMinutes minutes long and is not certified." You need not worry about input/output. It is handled by the template provided. You only need to implement the Movie class.
TestCase 1
Input
French
0
200
Output
This is a French movie with 0 characters, is 200 minutes long, and is not certified.
Explanation
The movie name has 0 number of characters which is less than 2. So, it is not certified.

TestCase 2
Input
Hindi
5
400
Output
This is a Hindi movie with 5 characters, is 400 minutes long, and is not certified.
Explanation
The movie is 400 minutes long (which is 6 hrs 40 minutes) greater than 4 hrs. So, it is not certified.

*/
