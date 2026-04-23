// Check whether a value is text, and return the text if it is, or returns double quotes (empty text) if it is not in a spreadsheet.

// Test if a value is text using the T function and return accordingly.

// Returns the text value if the input is text, otherwise returns empty string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T("date and time"));