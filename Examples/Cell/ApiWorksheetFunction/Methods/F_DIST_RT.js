// Return the (right-tailed) F probability distribution (degree of diversity) for two data sets in a spreadsheet.

// How to get the F probability distribution in a spreadsheet.

// Use function to calculate a right-tailed F probability distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_DIST_RT(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);