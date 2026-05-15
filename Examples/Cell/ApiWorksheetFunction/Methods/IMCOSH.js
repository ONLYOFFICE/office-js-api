// Get the hyperbolic cosine of a complex number in a spreadsheet.

// How do I find the hyperbolic cosine in a spreadsheet?

// Calculate the hyperbolic cosine function for a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOSH("-2+2.5i"));