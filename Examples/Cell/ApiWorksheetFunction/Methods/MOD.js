// Return the remainder after a number is divided by a divisor in a spreadsheet.

// How to get the modulo from the division in a spreadsheet.

// Use a function to calculate the remainder from the division operation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MOD(65, 7));