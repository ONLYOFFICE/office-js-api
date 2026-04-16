// Get the discount rate for a security in a spreadsheet.

// How to get a security discount rate in a spreadsheet.

// Use function to find security discount rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DISC("10/15/2018", "1/1/2020", 98, 100, 1));