// This example shows how to round a number to the specified number of decimals and returns the result as text with or without commas.

// How to round a number with parameters.

// Use function to round a number with specified decimal points.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.FIXED(1234.9, 1, false));