// Return the N/A error value which means "no value is available" in a spreadsheet.

// How to return the N/A in a spreadsheet.

// Use a function to get a N/A error value in a spreadsheet.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);