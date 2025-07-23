// This example shows how to return a number that is rounded up to the nearest integer or to the nearest multiple of significance regardless of the sign of the number. The number is always rounded up regardless of its sing. 

// How to round up a number to the nearest integer.

// Use a function to round up a number to the nearest integer.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISO_CEILING(-6.7, 2));