// Get the exponential of a complex number in a spreadsheet.

// How do I calculate the exponential function for a complex number in a spreadsheet?

// Apply the exponential function to a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMEXP("-2+2.5i"));