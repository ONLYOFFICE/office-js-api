// Calculate the error function for a specified value in a spreadsheet.

// How do I compute the error function between limits in a spreadsheet?

// Evaluate the integral of the error function within a range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF(-2));