// Return the inverse of the cumulative beta probability density function for a specified beta distribution (BETADIST) in a spreadsheet.

// How to get a result from inverse of the cumulative beta probability density function in a spreadsheet.

// Use function to get the cumulative beta probability density function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETA_INV(0.2, 4, 5);
worksheet.GetRange("B2").SetValue(ans);