// Return the complex conjugate of a complex number in a spreadsheet.

// How to get the complex conjugate in a spreadsheet.

// Use a function to get the complex conjugate of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCONJUGATE("-2+2.5i"));