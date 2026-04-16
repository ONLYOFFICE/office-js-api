// Convert a value to a number, dates to serial numbers, true to 1, error to {@link global#ErrorValue ErrorValue}, anything else to 0 (zero) in a spreadsheet.

// How to convert an object to a number in a spreadsheet.

// Use a function to get a number from any data type in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.N(false));