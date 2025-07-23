// This example shows how to return a bitwise "OR" of two numbers. 

// How to get a result from OR operation.

// Use function to calculate bitwise "OR" operation.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITOR(23, 10));