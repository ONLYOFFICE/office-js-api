// Calculate the geometric mean of positive numeric data in a spreadsheet.

// How to find the geometric mean in a spreadsheet.

// Use a function to calculate the geometric mean of positive numeric data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GEOMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);
