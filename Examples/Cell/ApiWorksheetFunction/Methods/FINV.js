// This example shows how to find the inverse of the (right-tailed) F probability distribution: if p = FDIST(x,...), then FINV(p,...) = x.

// How to get an inverse of the (right-tailed) F probability distribution.

// Use function to find out a F probability distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FINV(0.01, 6, 4);
worksheet.GetRange("B2").SetValue(ans);