// Check whether a value is an error, and return true or false in a spreadsheet.

// How to check if the cell contains an error.

// Use a function to check whether the value is error or not in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("B3").SetValue("#N/A")
let result = func.ISERR("B3");
worksheet.GetRange("C3").SetValue(result)