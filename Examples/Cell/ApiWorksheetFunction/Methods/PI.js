// Insert the mathematical constant pi into a cell in a spreadsheet.

// How do I get the value of pi for mathematical calculations in a spreadsheet?

// Use pi to calculate circles, circumference, and other geometric formulas in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PI());