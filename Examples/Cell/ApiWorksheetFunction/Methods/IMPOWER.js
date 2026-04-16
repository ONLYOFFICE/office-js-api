// Return a complex number raised to an integer power in a spreadsheet.

// How to get the result from raising into power of a complex number in a spreadsheet.

// Use a function to get the result from the power in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPOWER("-2+2.5i", -3));