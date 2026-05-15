// Calculate the annual nominal interest rate in a spreadsheet.

// Find the stated interest rate from effective rate and compounding periods in a spreadsheet.

// Convert compounded interest into annual percentage rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NOMINAL(0.7, 4));