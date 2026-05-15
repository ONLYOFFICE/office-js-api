// Divide one complex number by another in a spreadsheet.

// How do I divide two complex numbers in a spreadsheet?

// Get the quotient of complex numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMDIV("-2+2.5i", "0.1+1.5j"));