// Return true if a number is odd in a spreadsheet.

// How to check if the number is odd in a spreadsheet.

// Use a function to check whether a number is odd or not in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);