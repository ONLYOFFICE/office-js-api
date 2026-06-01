// Measure how spread out a set of numbers is from their average in a spreadsheet.

// Find the average distance of values from their mean in a spreadsheet.

// Summarize data variability by averaging all absolute deviations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));
