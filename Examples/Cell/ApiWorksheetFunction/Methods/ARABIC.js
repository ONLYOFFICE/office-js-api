// Convert a Roman numeral to Arabic in a spreadsheet.

// How to convert numbers to Arabic numerical in a spreadsheet.

// Use function to convert numbers to Arabic numerical in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));