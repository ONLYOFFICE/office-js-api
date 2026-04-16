// Return the value of the density function for a standard normal distribution in a spreadsheet.

// How to return the value of the density function in a spreadsheet.

// Use a function to claculate the value of the density function in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let number = 5;

worksheet.GetRange("A1").SetValue(number);

let func = Api.WorksheetFunction;
let ans = func.PHI(number);

worksheet.GetRange("C1").SetValue(ans);