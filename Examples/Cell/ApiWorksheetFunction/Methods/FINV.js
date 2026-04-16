// Find the inverse of the (right-tailed) F probability distribution: if p = FDIST(x,...), then FINV(p,...) = x in a spreadsheet.

// How to get an inverse of the (right-tailed) F probability distribution in a spreadsheet.

// Use function to find out a F probability distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FINV(0.01, 6, 4);
worksheet.GetRange("B2").SetValue(ans);