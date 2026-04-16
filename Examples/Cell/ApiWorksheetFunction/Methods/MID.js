// Return the characters from the middle of a text string, given a starting position and length in a spreadsheet.

// How to get characters from the middle of the string indicating an index and length in a spreadsheet.

// Use a function to get an array of characters from the middle of a string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MID("Online Office", 3, 4));