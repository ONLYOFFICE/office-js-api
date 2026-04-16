// Return the number of characters in a text string in a spreadsheet.

// How to get a length of a text in a spreadsheet.

// Use a function to get length of a string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEN("Online Office"));