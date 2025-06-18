// This example shows how to test whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise.

// How to compare two numbers.

// Use function to compare two numbers if it returns 1 they are equal else 0.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DELTA(23, 24));