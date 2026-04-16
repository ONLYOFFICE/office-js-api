// Return the effective annual interest rate in a spreadsheet.

// How to get an effective annual interest rate in a spreadsheet.

// Use function to get effective annual interest rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EFFECT(0.57, 4));