// Return the e constant raised to the power of a given number. The e constant is equal to 2.71828182845904, the base of the natural logarithm in a spreadsheet.

// How to get the result from raising the e constant to a power in a spreadsheet.

// Use function to raise the e constant to a specified power in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXP(5));