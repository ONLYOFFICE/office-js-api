// Find the quantile value for a given probability in beta distribution in a spreadsheet.

// How do I convert a probability percentage back into the original data range in a spreadsheet?

// Retrieve the input value that corresponds to a specific cumulative probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETA_INV(0.2, 4, 5);
worksheet.GetRange("B2").SetValue(ans);