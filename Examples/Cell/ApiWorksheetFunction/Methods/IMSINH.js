// Calculate the hyperbolic sine of a complex number in a spreadsheet.

// How do I find the hyperbolic sine value of a complex number in a spreadsheet?

// Get the hyperbolic sine result for complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSINH("-2+2.5i"));