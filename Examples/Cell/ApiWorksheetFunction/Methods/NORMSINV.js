// Calculate the inverse of the standard normal distribution in a spreadsheet.

// How do I find the inverse of a standard normal distribution in a spreadsheet?

// Get the quantile value for a given probability in a standard normal distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.25);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NORMSINV(value);

worksheet.GetRange("C1").SetValue(ans);