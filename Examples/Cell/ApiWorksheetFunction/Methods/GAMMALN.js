// Calculate the natural logarithm of a gamma function value in a spreadsheet.

// How do I find the natural logarithm of a gamma function in a spreadsheet?

// Get the logarithmic equivalent of a gamma function result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMALN(0.5);
worksheet.GetRange("B2").SetValue(ans);
