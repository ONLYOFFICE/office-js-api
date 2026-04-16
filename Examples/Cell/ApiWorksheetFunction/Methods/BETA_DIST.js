// Return the cumulative beta probability density function in a spreadsheet.

// How to get a result from cumulative beta probability density function in a spreadsheet.

// Use function to get the cumulative beta probability density function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETA_DIST(0.4, 4, 5, false);
worksheet.GetRange("B2").SetValue(ans);