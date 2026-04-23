// Convert a text string that represents a number to a number in a spreadsheet.

// The VALUE function parses numeric text and returns actual numeric values.

// Apply the function to convert numeric text strings to numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.VALUE("$3.50"));