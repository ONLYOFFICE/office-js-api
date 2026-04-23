// Calculate the hyperbolic secant of a complex number in a spreadsheet.

// How do I find the hyperbolic secant value of a complex number in a spreadsheet?

// Get the hyperbolic secant result for complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSECH("-2+2.5i"));