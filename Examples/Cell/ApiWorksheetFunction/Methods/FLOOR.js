// This example shows how to round a number down to the nearest multiple of significance.

// How to round a number down to the nearest multiple of significance.

// Use function to round down.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.FLOOR(5.786, 0.7));