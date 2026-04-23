// Calculate the harmonic mean of a set of positive numbers in a spreadsheet.

// How do I find the harmonic average for my data in a spreadsheet?

// Get the reciprocal of the average of reciprocals in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.HARMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);
