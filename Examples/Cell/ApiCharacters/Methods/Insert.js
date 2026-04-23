// Replace a selected portion of cell text with a new string in a spreadsheet.

// How do I substitute part of a cell's text with different content in a spreadsheet?

// Overwrite a specific slice of characters to correct or update cell content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.Insert("string");