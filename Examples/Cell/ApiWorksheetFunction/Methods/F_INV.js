// This example shows how to return the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x.

// How to get the inverse of the (left-tailed) F probability distribution.

// Use function to calculate an inverse of the F probability distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.F_INV(0.01, 6, 4);
worksheet.GetRange("B2").SetValue(ans);