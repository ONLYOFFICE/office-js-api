// Calculate the height of a normal distribution curve at a specific point in a spreadsheet.

// How do I get the probability density value for a standard normal distribution in a spreadsheet?

// Find how likely a value is within a bell curve distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let number = 5;

worksheet.GetRange("A1").SetValue(number);

let func = Api.WorksheetFunction;
let ans = func.PHI(number);

worksheet.GetRange("C1").SetValue(ans);