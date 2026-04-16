// Return the exponential distribution in a spreadsheet.

// How to get the exponential distribution in a spreadsheet.

// Use function to calculate an exponential distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.EXPON_DIST(0.5, 3, false);
worksheet.GetRange("B2").SetValue(ans);