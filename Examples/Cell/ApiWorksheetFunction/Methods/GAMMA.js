// Return the gamma function value in a spreadsheet.

// How to calculate the gamma function value in a spreadsheet.

// Use a function to get the result from a gamma function value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA(2.7);
worksheet.GetRange("B2").SetValue(ans);
