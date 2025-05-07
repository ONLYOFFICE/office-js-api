// This example shows how to return the natural logarithm of the gamma function.

// How to calculate the natural logarithm of the gamma function.

// Use a function to calculate the natural logarithm of the gamma function value.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMALN(0.5);
worksheet.GetRange("B2").SetValue(ans);

