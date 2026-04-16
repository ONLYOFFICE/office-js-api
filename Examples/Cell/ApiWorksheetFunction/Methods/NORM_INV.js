// Return the inverse of the normal cumulative distribution for the specified mean and standard deviation in a spreadsheet.

// How to calculate the inverse of the normal cumulative distribution in a spreadsheet.

// Use a function to get the inverse of the normal cumulative distribution with a mean and standard deviation in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.6);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NORMSDIST(value);

worksheet.GetRange("C1").SetValue(ans);