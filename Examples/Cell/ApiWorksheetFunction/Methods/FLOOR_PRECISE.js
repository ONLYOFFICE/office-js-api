// This example shows how to return a number that is rounded down to the nearest integer or to the nearest multiple of significance. The number is always rounded down regardless of its sign.

// How to round a number down to the nearest integer regardless its sign.

// Use function to round down a negative/positive number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FLOOR_PRECISE(-6.7, 2));