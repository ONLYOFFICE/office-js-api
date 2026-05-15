// Calculate the right-tail probability of the Student's t-distribution in a spreadsheet.

// How do I find the right-tail probability for a given t-value in a spreadsheet?

// Get the probability for the right side of the t-distribution curve in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T_DIST_RT(1.5, 10));