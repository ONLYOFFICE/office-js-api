// This example shows how to return the Student's t-distribution.

// How to calculate a Student's t-distribution.

// Use a function to estimate a Student's t-distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.TDIST(1.5, 10, 1);
worksheet.GetRange("B2").SetValue(ans);

