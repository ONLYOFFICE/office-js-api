// This example shows how to return the average of the absolute deviations of data points from their mean.

// How to get an average of the absolute deviations.

// Use function to get the average of the absolute deviations of data points from their mean.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));