// This example shows how to return the sum of the squares of the arguments.

// How to calculate the sum of the squares.

// Use a function to estimate the sum of the squares.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUMSQ(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12));