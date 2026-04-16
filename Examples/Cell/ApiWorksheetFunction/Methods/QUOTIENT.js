// Return the integer portion of a division in a spreadsheet.

// How to get the integer part from the result of division in a spreadsheet.

// Use a function to integer part from division in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.QUOTIENT(1698, 30));