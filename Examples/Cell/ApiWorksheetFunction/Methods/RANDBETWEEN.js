// This example shows how to return a random number between the numbers specified.

// How to get a number between indicated values.

// Use a function to return a random value between specified limits.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RANDBETWEEN(-1, 10));