// This example shows how to return the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

// How to calculate the standard normal cumulative distribution.

// Use a function to get the standard normal cumulative distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.NORMDIST(36, 6, 7, false));