// This example shows how to return the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

// How to calculate the inverse of the standard normal cumulative distribution.

// Use a function to get the inverse of the standard normal cumulative distribution.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.25);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.GetWorksheetFunction();
let ans = func.NORMSINV(value);

worksheet.GetRange("C1").SetValue(ans);
