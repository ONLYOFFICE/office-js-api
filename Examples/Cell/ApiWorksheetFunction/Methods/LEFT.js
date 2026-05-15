// Extract characters from the beginning of text in a spreadsheet.

// How do I get the first few letters or a prefix from a text string in a spreadsheet?

// Retrieve a specific number of characters counting from the left side of text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFT("Online Office", 6));