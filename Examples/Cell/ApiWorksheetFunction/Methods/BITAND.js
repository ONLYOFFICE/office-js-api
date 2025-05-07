// This example shows how to return a bitwise "AND" of two numbers. 

// How to get a two numbers bitwise AND.

// Use function to calculate bitwise AND opertation.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BITAND(13, 25));