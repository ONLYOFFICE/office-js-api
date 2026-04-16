// Return a number that represents the date in the date-time code in a spreadsheet.

// How to get a date in a spreadsheet.

// Use function to get the date from a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DATE(2018, 3, 16));