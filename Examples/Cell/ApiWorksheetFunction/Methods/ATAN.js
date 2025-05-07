// This example shows how to return the arctangent of a number.

// How to get an arctangent of a number.

// Use function to get an arctangent of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ATAN(0.25));