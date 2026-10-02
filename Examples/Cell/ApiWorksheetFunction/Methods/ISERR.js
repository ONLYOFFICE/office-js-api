// Check if a value is an error other than N/A in a spreadsheet.

// How do I detect if a cell contains an error in a spreadsheet?

// Identify errors in cells while excluding N/A values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISERR("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISERR("#DIV/0!"));
worksheet.GetRange("A3").SetValue(func.ISERR(255));