// Return the exponential distribution in a spreadsheet.

// Calculate exponential distribution values.

// Apply EXPONDIST function to get the exponential distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_DIST(10, 6, 4, false);
worksheet.GetRange("B2").SetValue(ans);