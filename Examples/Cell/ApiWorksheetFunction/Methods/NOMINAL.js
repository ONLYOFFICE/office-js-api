// Return the annual nominal interest rate in a spreadsheet.

// How to calculate the annual nominal interest rate in a spreadsheet.

// Use a function to get the annual nominal interest rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NOMINAL(0.7, 4));