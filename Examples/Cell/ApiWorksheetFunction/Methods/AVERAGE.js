// Return the average of the absolute deviations of data points from their mean in a spreadsheet.

// How to get an average of the absolute deviations in a spreadsheet.

// Use function to get the average of the absolute deviations of data points from their mean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGE(123, 197, 46, 345, 67, 456);
worksheet.GetRange("B2").SetValue(ans);