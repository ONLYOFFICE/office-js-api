// Return the natural logarithm of the gamma function in a spreadsheet.

// How to calculate the natural logarithm of the gamma function in a spreadsheet.

// Use a function to calculate the natural logarithm of the gamma function value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMALN(0.5);
worksheet.GetRange("B2").SetValue(ans);
