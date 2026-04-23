// Create a complex number from parts in a spreadsheet.

// What is a complex number made from two values in a spreadsheet?

// Combine regular and imaginary parts to build a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMPLEX(-2, 2.5, "i"));