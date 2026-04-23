// Return the sheet number of the reference sheet in a spreadsheet.

// Retrieve the sheet number for a given sheet reference using the SHEET function.

// Apply the function to display the sheet index in a cell.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.SHEET("Sheet1");
worksheet.GetRange("C3").SetValue(result);