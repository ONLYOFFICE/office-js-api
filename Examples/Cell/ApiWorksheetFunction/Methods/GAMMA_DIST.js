// Return the gamma distribution in a spreadsheet.

// How to calculate the gamma distribution in a spreadsheet.

// Use a function to get the result from a gamma distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA_DIST(10, 9, 2, false);
worksheet.GetRange("B2").SetValue(ans);