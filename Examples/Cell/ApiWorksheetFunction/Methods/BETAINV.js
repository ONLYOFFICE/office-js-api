// Return the inverse of the cumulative beta probability density function (BETA_DIST) in a spreadsheet.

// How to get a result from the inverse of the cumulative beta probability density function in a spreadsheet.

// Use function to get the inverse of the cumulative beta probability distribution function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BETAINV(0.2, 4, 5));