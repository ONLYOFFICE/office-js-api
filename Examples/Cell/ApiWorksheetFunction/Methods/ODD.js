// Round a number to the nearest odd integer in a spreadsheet.

// How do I round a value to the nearest odd number in a spreadsheet?

// Find the closest odd integer above or below a given number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODD(7.675));