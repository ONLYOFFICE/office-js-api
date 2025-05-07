// This example shows how to return a bitwise "XOR" of two numbers. 

// How to get a result from XOR operation.

// Use function to calculate bitwise "XOR" operation.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BITXOR(5, 3));