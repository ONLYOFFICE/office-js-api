// Add all the numbers in a range of cells in a spreadsheet.

// Sum all values using the SUM function with numeric arguments.

// Returns the total sum of the specified values.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUM(145, 37, 236, 69, 567, 92));