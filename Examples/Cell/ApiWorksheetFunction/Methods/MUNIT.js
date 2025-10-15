// This example shows how to return the unit matrix for the specified dimension.

// How to get a unit matrix.

// Use a function to get a unit matrix specifying dimension.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MUNIT(3));