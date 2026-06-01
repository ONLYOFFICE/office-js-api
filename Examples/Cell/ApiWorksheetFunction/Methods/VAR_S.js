// Estimate variance based on a sample (ignores logical values and text in the sample) in a spreadsheet.

// The VAR_S function calculates sample variance from numeric data only.

// Apply the function to estimate variance ignoring logical and text values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.VAR_S(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
worksheet.GetRange("B2").SetValue(result);
