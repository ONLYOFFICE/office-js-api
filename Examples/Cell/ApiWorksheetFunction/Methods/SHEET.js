// Return the sheet number of the reference sheet in a spreadsheet.

// How to get a sheet number in a spreadsheet.

// Use a function to get a sheet index in a spreadsheet.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.SHEET("Sheet1");
worksheet.GetRange("C3").SetValue(result);