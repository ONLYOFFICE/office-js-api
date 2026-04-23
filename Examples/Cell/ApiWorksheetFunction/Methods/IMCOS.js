// Get the cosine of a complex number in a spreadsheet.

// How do I calculate the cosine of a complex number in a spreadsheet?

// Apply the cosine function to a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOS("-2+2.5i"));