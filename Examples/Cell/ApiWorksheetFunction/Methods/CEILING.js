// This example shows how to round a number up, to the nearest multiple of significance.

// How to round a number up.

// Use function to round a number up the nearest integer or to the nearest multiple of significance.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING(1.23, 0.1));