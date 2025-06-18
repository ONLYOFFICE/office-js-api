// This example shows how to return the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x.

// How to get the inverse of the (right-tailed) F probability distribution.

// Use function to calculate an inverse of the F probability distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.F_INV_RT(0.01, 6, 4));