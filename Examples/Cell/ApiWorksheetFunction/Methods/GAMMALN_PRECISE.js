// Calculate the natural logarithm of a gamma function value with precise accuracy in a spreadsheet.

// How do I find the natural logarithm of a gamma function with greater precision in a spreadsheet?

// Get a more accurate logarithmic result for a gamma function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMALN_PRECISE(0.5);
worksheet.GetRange("B2").SetValue(ans);
