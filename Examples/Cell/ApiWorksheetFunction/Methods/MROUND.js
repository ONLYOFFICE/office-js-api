// This example shows how to return a number rounded to the desired multiple.

// How to round the number.

// Use a function to round the number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MROUND(14.35, 0.4));