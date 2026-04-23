// Count the number of characters in a selected text range within a cell in a spreadsheet.

// How do I find out how many characters are in a specific portion of a cell's text in a spreadsheet?

// Measure the length of a character selection taken from a cell value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let count = characters.GetCount();
worksheet.GetRange("B3").SetValue("Number of characters: " + count);