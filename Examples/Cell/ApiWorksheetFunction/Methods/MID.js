// Extract text from the middle of a string starting at a specific position in a spreadsheet.

// What characters can I pull from a text string in a spreadsheet?

// Get a substring from a specific position and length in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MID("Online Office", 3, 4));