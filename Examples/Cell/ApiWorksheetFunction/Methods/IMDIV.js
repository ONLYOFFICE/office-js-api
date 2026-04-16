// Return the quotient of two complex numbers in a spreadsheet.

// How to get the quotient of two comlex numbers in a spreadsheet.

// Use a function to get the quotient in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMDIV("-2+2.5i", "0.1+1.5j"));