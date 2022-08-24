let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie {
    constructor(lengthInMinutes, numCharacters, language){
        this.lengthInMinutes=lengthInMinutes;
        this.numCharacters=numCharacters;
        this.language=language;
    }
    run(){
    return ("This is a "+ language +" movie with "+ numCharacters +" characters and is "+ lengthInMinutes +" minutes long.");
    }
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());






/* 
movie description classes
Write a Movie class for which you can create movie objects. The objects should have the following variables: lengthInMinutes, numCharacters, language. The class should have a run method which prints out: "This is a language movie with numCharacters characters and is lengthInMinutes minutes long."

You don't need to worry about input/output . The given template will take care of it.

Input
First line is a string, denoting the language of the movie Second line is an integer, denoting the number of characters Third line is an integer, denoting the length in minutes

Output
The output should be the return statement of run: "This is a language movie with numCharacters characters and is lengthInMinutes minutes long."

Example
Input:

French
4
200
Output:

This is a French movie with 4 characters and is 200 minutes long.
First line is French indicating the movie's language is French Second line is 4, indicating that the movie has 4 characters Third line is 200, indicating that the movie is 200 minutes long

*/