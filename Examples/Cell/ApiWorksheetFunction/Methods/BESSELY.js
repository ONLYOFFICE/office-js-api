// Evaluate the Bessel function of the second kind in a spreadsheet.

// How do I find the Bessel Y function result for signal analysis in a spreadsheet?

// Use mathematical modeling for vibration and resonance calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELY(2.5, 1));