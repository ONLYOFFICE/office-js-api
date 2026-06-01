// Replace existing text with new text in a text string in a spreadsheet.

// Substitute a substring with another one using the SUBSTITUTE function.

// Returns the modified text with the specified replacement applied.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUBSTITUTE("Online Office is a cloud business service portal", "Office", "portal"));