// Return the cosine of a complex number in a spreadsheet.

// How to get the cosine in a spreadsheet.

// Use a function to get the cosine of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOS("-2+2.5i"));