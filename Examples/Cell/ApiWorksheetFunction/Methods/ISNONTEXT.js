// Determine whether a cell contains something other than text in a spreadsheet.

// How do I verify if a cell is not text (includes numbers and blank cells) in a spreadsheet?

// Use a function to separate text values from numbers and empty cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNONTEXT("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNONTEXT(255));
worksheet.GetRange("A3").SetValue(func.ISNONTEXT("Online Office"));