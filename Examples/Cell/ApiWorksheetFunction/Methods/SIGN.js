// This example shows how to return the sign of a number: 1 if the number is positive, 0 if the number is zero, or -1 if the number is negative.

// How to find out whether a number is positive or negative.

// Use a function to get a sign of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIGN(12));