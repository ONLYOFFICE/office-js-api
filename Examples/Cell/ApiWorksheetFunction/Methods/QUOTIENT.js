// Get the whole number result of dividing one value by another in a spreadsheet.

// How do I find the integer portion of a division in a spreadsheet?

// Extract the quotient without the remainder from two numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.QUOTIENT(1698, 30));