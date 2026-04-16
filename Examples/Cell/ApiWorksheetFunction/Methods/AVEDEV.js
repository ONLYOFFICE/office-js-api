// Return the average of the absolute deviations of data points from their mean in a spreadsheet.

// How to get an average of the absolute deviations in a spreadsheet.

// Use function to get the average of the absolute deviations of data points from their mean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));