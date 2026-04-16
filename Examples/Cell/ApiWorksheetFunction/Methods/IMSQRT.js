// Return the square root of a complex number in a spreadsheet.

// How to get the square root in a spreadsheet.

// Use a function to get the square root of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSQRT("-2+2.5i"));