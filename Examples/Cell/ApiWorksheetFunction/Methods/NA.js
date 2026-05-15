// Insert an N/A error value into a cell in a spreadsheet.

// Display "no value available" in a spreadsheet using a function.

// Add an error indicator when data is not available in a spreadsheet.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);