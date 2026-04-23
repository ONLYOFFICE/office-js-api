// Return the sum of the squares of the arguments in a spreadsheet.

// Calculate the sum of squared values using the SUMSQ function.

// Returns the total of all squared arguments.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUMSQ(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12));