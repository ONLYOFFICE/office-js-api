// Check whether a value is text, and return true or false in a spreadsheet.

// How to know whether a value is a text in a spreadsheet.

// Use a function to find out whether a value is a text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISTEXT(255));
worksheet.GetRange("A2").SetValue(func.ISTEXT("#N/A"));
worksheet.GetRange("A3").SetValue(func.ISTEXT("Online Office"));