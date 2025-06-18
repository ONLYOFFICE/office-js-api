// This example shows how to estimate variance based on a sample (ignores logical values and text in the sample).

// How to estimate variance based on a sample.

// Use a function to estimate variance ignoring logical and text values.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.VAR_S(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
worksheet.GetRange("B2").SetValue(result);

