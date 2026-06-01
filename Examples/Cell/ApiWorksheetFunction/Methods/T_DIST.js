// Calculate the left-tail probability of the Student's t-distribution in a spreadsheet.

// How do I find the probability for a given t-value in a spreadsheet?

// Get the cumulative distribution function for the t-distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.T_DIST(1.5, 10, false);
worksheet.GetRange("B2").SetValue(ans);
