// Calculate the Weibull distribution for statistical analysis in a spreadsheet.

// How do I compute the Weibull distribution for probability calculations in a spreadsheet?

// Determine the cumulative or probability density for Weibull distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.WEIBULL_DIST(12, 2, 5, true);
worksheet.GetRange("B2").SetValue(result);
