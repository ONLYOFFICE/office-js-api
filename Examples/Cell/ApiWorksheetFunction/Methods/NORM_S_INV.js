// Return the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one) in a spreadsheet.

// How to calculate the inverse of the standard normal cumulative distribution in a spreadsheet.

// Use a function to get the inverse of the standard normal cumulative distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORM_S_INV(0.908));