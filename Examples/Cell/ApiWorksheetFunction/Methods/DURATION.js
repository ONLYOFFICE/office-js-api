// Calculate the annual duration of a security with periodic interest payments in a spreadsheet.

// How do I find the duration of a bond or security investment in a spreadsheet?

// Measure how long a security will take to repay its cost in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));