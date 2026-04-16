// Return the current date in the MM/dd/yy format in a spreadsheet.

// How to get a current date in a spreadsheet.

// Use a function to get current date in MM/dd/yy format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TODAY());