// Return the annual duration of a security with periodic interest payments in a spreadsheet.

// How to get an annual duration of a security with periodic interest payments in a spreadsheet.

// Use function to find an annual duration of a security in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));