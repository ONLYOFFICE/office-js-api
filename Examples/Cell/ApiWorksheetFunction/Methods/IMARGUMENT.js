// Return the argument Theta, an angle expressed in radians in a spreadsheet.

// How to get an angle expressed in radians in a spreadsheet.

// Use a function to get an angle expressed in radians in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMARGUMENT("-2+2.5i"));