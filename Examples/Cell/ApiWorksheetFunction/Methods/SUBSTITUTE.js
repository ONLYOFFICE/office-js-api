// Replace existing text with new text in a text string in a spreadsheet.

// How to substitute a substring with another one in a spreadsheet.

// Use a function to replace a text with another one in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUBSTITUTE("Online Office is a cloud business service portal", "Office", "portal"));