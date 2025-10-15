// This example shows how to round the number up to the nearest multiple of significance. Negative numbers are rounded towards zero.

// How to round up the number.

// Use function to round up a number to the nearest multiple of significance.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ECMA_CEILING(1.567, 0.1));