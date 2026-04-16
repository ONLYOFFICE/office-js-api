// The specified number of characters from the end of a text string in a spreadsheet.

// How to get characters from the end of a string in a spreadsheet.

// Use a function to return n characters from the right part of a text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHT("Online Office", 2));