// Return the secant of a complex number in a spreadsheet.

// How to get the secant in a spreadsheet.

// Use a function to get the secant of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSEC("-2+2.5i"));