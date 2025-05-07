// This example shows how to return a number shifted left by the specified number of bits. 

// How to get a result from bits left shift.

// Use function to calculate bitwise left shift operation.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BITLSHIFT(4, 2));