// Convert an arabic numeral to a roman numeral in the string format in a spreadsheet.

// How to get roman numbers from arabic in a spreadsheet.

// Use a function to convert numbers from arabic numeral to roman in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROMAN(1250, 4));