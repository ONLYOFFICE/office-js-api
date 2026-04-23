// Identify the data type of a cell value and return a numeric code in a spreadsheet.

// How do I determine what type of data is stored in a cell in a spreadsheet?

// Get a numeric identifier that indicates whether a value is text, a number, or a boolean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TYPE(255));
worksheet.GetRange("A2").SetValue(func.TYPE(true));
worksheet.GetRange("A3").SetValue(func.TYPE("Online Office"));