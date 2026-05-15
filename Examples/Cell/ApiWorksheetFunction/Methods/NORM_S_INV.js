// Calculate the inverse of the standard normal distribution for a given probability in a spreadsheet.

// How do I find the inverse of the standard normal distribution in a spreadsheet?

// Get the quantile value for a probability in a standard normal distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORM_S_INV(0.908));