// This example shows how to convert real and imaginary coefficients into a complex number.

// How to create a complex number using coefficients.

// Use function to convert real and imaginary coefficients into a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMPLEX(-2, 2.5, "i"));