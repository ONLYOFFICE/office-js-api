// Return the absolute value (modulus) of a complex number in a spreadsheet.

// How to get the absolute value of the complex number in a spreadsheet.

// Use a function to get a modulus of the complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMABS("-2+2.5i"));