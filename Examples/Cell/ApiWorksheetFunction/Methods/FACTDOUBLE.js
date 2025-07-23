// This example shows how to return the double factorial of a number.

// How to calculate a double factorial.

// Use function to calculate the double factorial of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACTDOUBLE(123));