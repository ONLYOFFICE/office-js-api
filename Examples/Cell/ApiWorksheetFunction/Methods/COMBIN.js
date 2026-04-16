// Return the number of combinations for a given number of items in a spreadsheet.

// How to find a number of combinations in a spreadsheet.

// Use function to count possible combinations for a given number of items in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBIN(67, 7));