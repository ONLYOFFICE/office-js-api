// Return the e constant raised to the power of a given number. The e constant is equal to 2.71828182845904, the base of the natural logarithm in a spreadsheet.

// Raise the e constant to a specified power.

// Calculate exponential values using EXP function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXP(5));