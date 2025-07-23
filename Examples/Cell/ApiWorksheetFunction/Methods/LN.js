// This example shows how to return the natural logarithm of a number.

// How to get the natural logarithm.

// Use a function to return a natural logarithm.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LN(23));
