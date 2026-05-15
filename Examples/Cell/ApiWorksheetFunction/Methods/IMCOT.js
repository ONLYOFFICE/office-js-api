// Get the cotangent of a complex number in a spreadsheet.

// How do I calculate the cotangent of a complex number in a spreadsheet?

// Apply the cotangent function to a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOT("-2+2.5i"));