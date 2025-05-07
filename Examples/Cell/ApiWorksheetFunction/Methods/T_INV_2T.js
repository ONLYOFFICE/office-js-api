// This example shows how to return the two-tailed inverse of the Student's t-distribution.

// How to calculate the two-tailed inverse of Student's t-distribution.

// Use a function to estimate the Student's t-distribution two-tailed inverse.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.T_INV_2T(0.5, 10));