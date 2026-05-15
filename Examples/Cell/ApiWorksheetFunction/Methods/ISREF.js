// Determine whether a value is a cell reference in a spreadsheet.

// How do I verify if a value points to a cell or range in a spreadsheet?

// Use a function to distinguish between cell references and literal values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISREF("A3"));
worksheet.GetRange("A2").SetValue(func.ISREF(worksheet.GetRange("A3")));