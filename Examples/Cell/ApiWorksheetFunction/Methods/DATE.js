// Create a date value from year, month, and day numbers in a spreadsheet.

// What date do these numbers represent in a spreadsheet?

// Combine date parts into a single date value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DATE(2018, 3, 16));