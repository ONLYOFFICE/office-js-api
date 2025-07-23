// This example shows how to return the left-tailed inverse of the Student's t-distribution.

// How to calculate the left-tailed inverse of Student's t-distribution.

// Use a function to estimate the Student's t-distribution left-tailed inverse.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.T_INV(0.75, 2);
worksheet.GetRange("B2").SetValue(result);

