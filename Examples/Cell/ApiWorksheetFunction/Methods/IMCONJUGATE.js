// Get the complex conjugate of a number in a spreadsheet.

// How do I find the conjugate of a complex number in a spreadsheet?

// Reflect a complex number across the real axis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCONJUGATE("-2+2.5i"));