// Convert full-width characters to half-width for DBCS languages in a spreadsheet.

// Apply the ASC function to change character width in a spreadsheet.

// Reduce character size by converting from double-byte to single-byte in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASC("text"));