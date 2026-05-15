// Check if a value is an error other than N/A in a spreadsheet.

// How do I detect if a cell contains an error in a spreadsheet?

// Identify errors in cells while excluding N/A values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("B3").SetValue("45")
let result = func.ISERROR("B3");
worksheet.GetRange("C3").SetValue(result)