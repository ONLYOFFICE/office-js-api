// Get the hyperbolic cosecant of a complex number in a spreadsheet.

// How do I find the hyperbolic cosecant in a spreadsheet?

// Calculate the hyperbolic cosecant function for a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCSCH("-2+2.5i"));