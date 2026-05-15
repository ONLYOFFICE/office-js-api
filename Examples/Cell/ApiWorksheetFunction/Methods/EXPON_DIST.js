// Return the exponential distribution in a spreadsheet.

// Calculate exponential distribution values.

// Apply EXPON_DIST function to get the exponential distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.EXPON_DIST(0.5, 3, false);
worksheet.GetRange("B2").SetValue(ans);