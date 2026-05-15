// Calculate cumulative or probability density for beta distribution in a spreadsheet.

// How do I determine what percentage of outcomes fall within a range in a spreadsheet?

// Evaluate the distribution curve to understand probability across different values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETA_DIST(0.4, 4, 5, false);
worksheet.GetRange("B2").SetValue(ans);