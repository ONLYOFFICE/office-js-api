// This example shows how to return the square root of (number * pi).

// How to calculate the square root of a number multiplied by aa constant Pi.

// Use a function to get the square root of (number * pi).

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));