// Get the tangent of a complex number in a spreadsheet.

// How do I calculate the tangent of a complex number in a spreadsheet?

// Find the tangent value for a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMTAN("-2+2.5i"));