// This example shows how to return the integer portion of a division.

// How to get the integer part from the result of division.

// Use a function to integer part from division.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.QUOTIENT(1698, 30));