// Calculate normal distribution probability for a value in a spreadsheet.

// Find the cumulative probability in a distribution with specified mean and standard deviation in a spreadsheet.

// Determine statistical likelihood using the normal distribution curve in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORMDIST(36, 6, 7, false));