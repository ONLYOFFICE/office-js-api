// Calculate the cosecant (reciprocal of sine) for an angle in a spreadsheet.

// What is the cosecant value in a spreadsheet?

// Determine the trigonometric cosecant ratio in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSC(0.785398));