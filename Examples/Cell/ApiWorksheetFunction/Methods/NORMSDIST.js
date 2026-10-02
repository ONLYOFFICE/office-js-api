// Calculate standard normal distribution probability in a spreadsheet.

// Find cumulative probability using the standard normal curve in a spreadsheet.

// Determine statistical likelihood for standardized values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(0.6);
let value = worksheet.GetRange("A1").GetValue();
let func = Api.WorksheetFunction;
let ans = func.NORMSDIST(value);
worksheet.GetRange("C1").SetValue(ans);