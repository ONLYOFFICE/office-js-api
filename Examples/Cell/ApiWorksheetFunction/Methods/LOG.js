// This example shows how to return the logarithm of a number to the specified base.

// How to get the logarithm to the specified base.

// Use a function to return the logarithm.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG(56, 5));