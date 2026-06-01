// Calculate the geometric mean of a set of positive numbers in a spreadsheet.

// How do I find the geometric average of my data in a spreadsheet?

// Get the nth root of the product of n values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GEOMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);
