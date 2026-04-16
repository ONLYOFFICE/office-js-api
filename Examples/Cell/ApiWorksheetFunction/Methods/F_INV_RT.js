// Return the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x in a spreadsheet.

// How to get the inverse of the (right-tailed) F probability distribution in a spreadsheet.

// Use function to calculate an inverse of the F probability distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.F_INV_RT(0.01, 6, 4));