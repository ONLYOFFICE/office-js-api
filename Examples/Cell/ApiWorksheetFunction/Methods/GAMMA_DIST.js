// Calculate the probability of a value in a gamma distribution in a spreadsheet.

// How do I evaluate a gamma distribution at a specific point in a spreadsheet?

// Get the cumulative or probability density of a gamma distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA_DIST(10, 9, 2, false);
worksheet.GetRange("B2").SetValue(ans);