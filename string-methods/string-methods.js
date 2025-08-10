// split()
// To divide a string into an array of substrings.
// Syntax: string.split(separator, limit)
// Parameters:
// 1. separator (optional):
// Specifies the pattern to split the string.
// Can be a "string or a regular" expression.
// If omitted, the method returns the entire string as a single-element array.

// 2. limit (optional):
// Specifies the maximum number of splits. Additional parts are ignored.

// EX:
//1
// let text = "apple,banana,cherry";
// console.log(text.split()); //[ 'apple,banana,cherry' ]
// console.log(text.split(',')); // ["apple", "banana", "cherry"]

//2
// let textOne = "apple,banana,cherry";
// let limited = textOne.split(",", 2);
// console.log(limited); // ["a", "b"]


// Use Cases in JavaScript
// // Splitting strings in data transformation pipelines.
let logData = "INFO:2024-12-07:User logged in|ERROR:2024-12-07:Failed login attempt";
let logs = logData.split("|"); // Split log entries

console.log("Splitted Logs", logs);

console.log("----------------------");

let structuredLogs = logs.map(log => {
    let [level, date, message] = log.split(":");
    return { level, date, message };
});

console.log(structuredLogs);
