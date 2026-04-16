// Return the cotangent of a complex number in a spreadsheet.

// How to get the cotangent in a spreadsheet.

// Use a function to get the cotangent of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOT("-2+2.5i"));