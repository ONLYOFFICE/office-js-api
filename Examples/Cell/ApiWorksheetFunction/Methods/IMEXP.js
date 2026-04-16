// Return the exponential of a complex number in a spreadsheet.

// How to get the exponential of a comlex numbers in a spreadsheet.

// Use a function to get the exponential in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMEXP("-2+2.5i"));