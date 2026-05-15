// Evaluate the modified Bessel function of the second kind in a spreadsheet.

// How do I find the Bessel K function result for engineering calculations in a spreadsheet?

// Apply mathematical modeling for wave propagation and oscillatory behavior in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELK(1.5, 1));