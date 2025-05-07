// This example shows how to return the (left-tailed) F probability distribution (degree of diversity) for two data sets.

// How to get the F probability distribution (degree of diversity).

// Use function to calculate a left-tailed F probability distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.F_DIST(10, 6, 4, false);
worksheet.GetRange("B2").SetValue(ans);