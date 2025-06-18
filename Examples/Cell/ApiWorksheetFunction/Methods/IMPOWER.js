// This example shows how to return a complex number raised to an integer power.

// How to get the result from raising into power of a complex number.

// Use a function to get the result from the power.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMPOWER("-2+2.5i", -3));