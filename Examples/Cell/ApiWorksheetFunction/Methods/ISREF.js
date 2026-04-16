// Check whether a value is a reference, and return true or false in a spreadsheet.

// How to know whether a value is a reference in a spreadsheet.

// Use a function to find out whether a value is a reference in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISREF("A3"));
worksheet.GetRange("A2").SetValue(func.ISREF(worksheet.GetRange("A3")));