// This example shows how to return a number that is rounded up to the nearest integer or to the nearest multiple of significance. The number is always rounded up regardless of its sing.

// How to round a number up precisely.

// Use function to round a negative or positive number up the nearest integer or to the nearest multiple of significance.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_PRECISE(-6.7, 2));