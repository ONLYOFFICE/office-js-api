// Return the current date in the MM/dd/yy format in a spreadsheet.

// Retrieve the system date and display it with the built-in time format.

// Apply the TODAY function to insert the current date into a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TODAY());