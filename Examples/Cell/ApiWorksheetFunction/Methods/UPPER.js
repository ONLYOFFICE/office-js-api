// Convert a text string to all uppercase letters in a spreadsheet.

// The UPPER function transforms text by converting lowercase characters to uppercase.

// Apply the function to convert all letters to uppercase in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UPPER("Online Office"));