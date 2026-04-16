// Return the hyperbolic sine of a complex number in a spreadsheet.

// How to get the hyperbolic sine in a spreadsheet.

// Use a function to get the hyperbolic sine of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSINH("-2+2.5i"));