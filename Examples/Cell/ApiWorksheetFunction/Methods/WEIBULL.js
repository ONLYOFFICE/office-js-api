// This example shows how to return the Weibull distribution.

// How to return the Weibull distribution.

// Use a function to calculate the Weibull distribution.


let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.WEIBULL(12, 2, 5, true);
worksheet.GetRange("B2").SetValue(result);

