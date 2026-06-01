// Convert text to a number using custom decimal and thousands separators in a spreadsheet.

// How do I parse a text value as a number in a spreadsheet?

// Transform text with different regional number formats into numeric values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NUMBERVALUE("2.500,27", ",", "."));