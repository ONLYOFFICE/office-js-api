// This example shows how to round a number down, to the nearest integer or to the nearest multiple of significance.

// How to round a number down to the nearest integer.

// Use function to round down a number with specified decimal points.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.FLOOR_MATH(-5.5, 2, 1));