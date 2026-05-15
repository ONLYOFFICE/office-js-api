// Extract the real part of a complex number in a spreadsheet.

// How do I get the real coefficient from a complex number in a spreadsheet?

// Retrieve the real component for complex number analysis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMREAL("-2+2.5i"));