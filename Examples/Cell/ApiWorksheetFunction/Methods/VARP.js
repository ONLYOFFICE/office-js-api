// Calculate variance based on the entire population (ignores logical values and text in the population) in a spreadsheet.

// The VARP function computes population variance from numeric data only.

// Apply the function to calculate variance based on the entire population in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.VARP(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
worksheet.GetRange("B2").SetValue(result);
