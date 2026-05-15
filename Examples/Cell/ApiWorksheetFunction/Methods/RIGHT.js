// Extract characters from the end of text in a spreadsheet.

// How do I get the last characters from a text string in a spreadsheet?

// Retrieve a specific number of characters from the right side of a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHT("Online Office", 2));