// Return the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals in a spreadsheet.

// How to calculate the harmonic mean of a data set of positive numbers in a spreadsheet.

// Use a function to calculate harmonic mean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.HARMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);
