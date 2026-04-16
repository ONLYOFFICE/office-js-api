// Return true if a number is even in a spreadsheet.

// How to check if the number is even in a spreadsheet.

// Use a function to check whether a number is even or not in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)