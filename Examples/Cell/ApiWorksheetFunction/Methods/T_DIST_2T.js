// Calculate the two-tail probability of the Student's t-distribution in a spreadsheet.

// How do I find the two-tailed probability for a given t-value in a spreadsheet?

// Get the probability for both tails of the t-distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T_DIST_2T(1.5, 10));