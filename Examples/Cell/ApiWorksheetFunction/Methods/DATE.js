// This example shows how to return a number that represents the date in the date-time code.

// How to get a date.

// Use function to get the date from a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DATE(2018, 3, 16));
