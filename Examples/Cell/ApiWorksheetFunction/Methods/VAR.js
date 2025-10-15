// This example shows how to estimate variance based on a sample (ignores logical values and text in the sample).

// How to estimate variance based on a sample.

// Use a function to estimate variance ignoring logical and text values.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.VAR(1, 4, 2, 6, 0, 1, 3, 8, 0, 0, 6, 10, 0, 0, 7, 12)
worksheet.GetRange("B2").SetValue(result);

