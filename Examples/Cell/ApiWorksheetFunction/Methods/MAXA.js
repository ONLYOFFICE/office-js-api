// Find the largest value in a set that includes numbers, text, and logical values in a spreadsheet.

// How do I find the maximum value when my list contains mixed data types in a spreadsheet?

// Get the highest value from a collection of mixed data in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let maxA = func.MAXA(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(maxA);