// This example shows how to return the gamma distribution.

// How to calculate the gamma distribution.

// Use a function to get the result from a gamma distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMADIST(10, 9, 2, false);
worksheet.GetRange("B2").SetValue(ans);

