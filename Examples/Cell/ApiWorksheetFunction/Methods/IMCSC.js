// Get the cosecant of a complex number in a spreadsheet.

// How do I calculate the cosecant of a complex number in a spreadsheet?

// Apply the cosecant function to a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCSC("-2+2.5i"));