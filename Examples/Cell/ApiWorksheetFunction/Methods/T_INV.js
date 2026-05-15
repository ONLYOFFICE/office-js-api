// Find the t-value for a given left-tail probability in a spreadsheet.

// How do I determine the t-value that corresponds to a probability in a spreadsheet?

// Get the inverse of the left-tailed t-distribution to find critical values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.T_INV(0.75, 2);
worksheet.GetRange("B2").SetValue(result);
