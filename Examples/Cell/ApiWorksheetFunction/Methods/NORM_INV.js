// Calculate the inverse of the normal distribution for a given mean and standard deviation in a spreadsheet.

// How do I find the value for a probability in a normal distribution in a spreadsheet?

// Get the quantile value for a specific probability with custom mean and standard deviation in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.6);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NORMSDIST(value);

worksheet.GetRange("C1").SetValue(ans);