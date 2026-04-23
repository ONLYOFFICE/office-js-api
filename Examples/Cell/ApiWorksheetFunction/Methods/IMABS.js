// Get the absolute value of a complex number in a spreadsheet.

// How do I find the magnitude of a complex number in a spreadsheet?

// Calculate the modulus of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMABS("-2+2.5i"));