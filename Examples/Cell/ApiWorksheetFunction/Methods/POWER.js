// Raise a number to a power in a spreadsheet.

// What is the result of raising a number to a power in a spreadsheet?

// Calculate an exponential value using a specific base and exponent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.POWER(23, 4));