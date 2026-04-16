// Return the real coefficient of a complex number in a spreadsheet.

// How to get the real coefficient in a spreadsheet.

// Use a function to get the real coefficient of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMREAL("-2+2.5i"));