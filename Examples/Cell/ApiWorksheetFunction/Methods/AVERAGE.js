// This example shows how to return the average of the absolute deviations of data points from their mean.

// How to get an average of the absolute deviations.

// Use function to get the average of the absolute deviations of data points from their mean.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.AVERAGE(123, 197, 46, 345, 67, 456);
worksheet.GetRange("B2").SetValue(ans);