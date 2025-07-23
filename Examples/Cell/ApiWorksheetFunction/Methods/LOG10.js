// This example shows how to return the base-10 logarithm of a number.

// How to get the logarithm to the base 10.

// Use a function to return the logarithm with the base-10.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG10(56));