// This example shows how to return the inverse of the cumulative beta probability density function for a specified beta distribution (BETADIST).

// How to get a result from inverse of the cumulative beta probability density function.

// Use function to get the cumulative beta probability density function.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BETA_INV(0.2, 4, 5);
worksheet.GetRange("B2").SetValue(ans);