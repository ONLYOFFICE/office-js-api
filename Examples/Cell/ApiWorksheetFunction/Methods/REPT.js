// Repeat text multiple times in a spreadsheet.

// How do I duplicate text in a cell in a spreadsheet?

// Fill a cell with copies of the same text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPT("Text", 3));