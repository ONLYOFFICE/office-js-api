// Show for double-byte character set (DBCS) languages, the function changes full-width (double-byte) characters to half-width (single-byte) characters in a spreadsheet.

// How to make characters half-width (single-byte) characters in a spreadsheet.

// Use function to make characters half-width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASC("text"));