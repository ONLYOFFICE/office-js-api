// Get the angle of a complex number in radians in a spreadsheet.

// How do I find the argument of a complex number in a spreadsheet?

// Calculate the phase angle of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMARGUMENT("-2+2.5i"));