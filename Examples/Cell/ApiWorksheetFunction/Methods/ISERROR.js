// Check if a value is any type of error in a spreadsheet.

// How do I determine if a cell contains an error in a spreadsheet?

// Test whether a value is an error result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("B3").SetValue("#N/A")
let result = func.ISERR("B3");
worksheet.GetRange("C3").SetValue(result)