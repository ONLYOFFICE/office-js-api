// This example shows how to return the mathematical constant pi, equal to 3.14159265358979, accurate to 15 digits.

// How to return the mathematical constant pi.

// Use a function to return a constant pi.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PI());