// Return an interest rate for a fully invested security in a spreadsheet.

// How to calculate an interest rate for a fully invested security in a spreadsheet.

// Use a function to get a fully invested security's interest rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.INTRATE("1/1/2018", "11/12/2018", 1000, 1050, 2));