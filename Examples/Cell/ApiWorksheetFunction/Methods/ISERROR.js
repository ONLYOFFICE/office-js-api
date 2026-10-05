// Check if a value is any type of error in a spreadsheet.

// How do I determine if a cell contains an error in a spreadsheet?

// Test whether a value is an error result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISERROR("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISERROR("#DIV/0!"));
worksheet.GetRange("A3").SetValue(func.ISERROR(255));