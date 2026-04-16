// Return the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x in a spreadsheet.

// How to get the inverse of the (left-tailed) F probability distribution in a spreadsheet.

// Use function to calculate an inverse of the F probability distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_INV(0.01, 6, 4);
worksheet.GetRange("B2").SetValue(ans);