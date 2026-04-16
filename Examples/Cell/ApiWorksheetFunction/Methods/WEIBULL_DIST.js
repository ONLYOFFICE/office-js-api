// Return the Weibull distribution in a spreadsheet.

// How to return the Weibull distribution in a spreadsheet.

// Use a function to calculate the Weibull distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.WEIBULL_DIST(12, 2, 5, true);
worksheet.GetRange("B2").SetValue(result);
