// Raise a complex number to a specified power in a spreadsheet.

// How do I calculate a complex number raised to an integer power in a spreadsheet?

// Get the exponential result of complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPOWER("-2+2.5i", -3));