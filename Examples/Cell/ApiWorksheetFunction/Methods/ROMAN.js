// Convert numbers to Roman numerals in a spreadsheet.

// How do I display a number as Roman numerals in a spreadsheet?

// Change standard numbers into Roman numeral format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROMAN(1250, 4));