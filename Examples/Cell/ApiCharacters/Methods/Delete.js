// Remove a specific sequence of characters from a cell's text in a spreadsheet.

// How do I erase a portion of text inside a cell by position in a spreadsheet?

// Trim unwanted characters out of a cell value without replacing the entire contents in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
characters.Delete();