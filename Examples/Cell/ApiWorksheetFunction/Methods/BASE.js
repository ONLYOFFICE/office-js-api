// Convert a number to a text representation in a chosen base (such as binary or hexadecimal) in a spreadsheet.

// Express a number in a different numeral base in a spreadsheet.

// Rewrite a decimal value as a string in any radix with a minimum digit width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BASE(5, 2, 5));
