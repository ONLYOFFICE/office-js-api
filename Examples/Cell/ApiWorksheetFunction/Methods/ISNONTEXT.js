// Check whether a value is not text (blank cells are not text), and return true or false in a spreadsheet.

// How to check if the cell contains a non-text value.

// Use a function to check whether a range data is a text or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNONTEXT("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNONTEXT(255));
worksheet.GetRange("A3").SetValue(func.ISNONTEXT("Online Office"));