// Return the cosecant of a complex number in a spreadsheet.

// How to get the cosecant in a spreadsheet.

// Use a function to get the cosecant of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCSC("-2+2.5i"));