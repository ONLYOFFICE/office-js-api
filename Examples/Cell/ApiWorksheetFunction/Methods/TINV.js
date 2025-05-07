// This example shows how to return the two-tailed inverse of the Student's t-distribution.

// How to create a serial number from the two-tailed inverse.

// Use a function to get two-tailed inverse of the Student's t-distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.TINV(0.5, 10);
worksheet.GetRange("B2").SetValue(result);

