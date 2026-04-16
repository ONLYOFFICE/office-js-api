// Return the specified number of characters from the start of a text string in a spreadsheet.

// How to find the number of characters starting from the index in a spreadsheet.

// Use a function to get a length of a text starting from the index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFT("Online Office", 6));