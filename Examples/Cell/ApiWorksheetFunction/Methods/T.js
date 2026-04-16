// Check whether a value is text, and return the text if it is, or returns double quotes (empty text) if it is not in a spreadsheet.

// How to return a text if a value is a text otherwise return an empty string in a spreadsheet.

// Use a function to check whether a cell value is a text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T("date and time"));