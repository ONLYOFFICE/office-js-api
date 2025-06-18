// This example shows how to return the square root of a number.

// How to calculate the square root of a number.

// Use a function to get the square root of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SQRT(100));