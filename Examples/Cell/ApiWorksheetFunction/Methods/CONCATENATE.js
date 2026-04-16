// Combine multiple text strings into one text string in a spreadsheet.

// How to add multiple text strings into one text string in a spreadsheet.

// Use function to create one text string from multiple ones in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONCATENATE("John", " ", "Adams"));