// Return the natural logarithm of a complex number in a spreadsheet.

// How to get the natural logarithm of a comlex numbers in a spreadsheet.

// Use a function to get the natural logarithm in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLN("-2+2.5i"));