// Adjust the text size of specific characters in a cell in a spreadsheet.

// How do I make part of the text in a cell larger or smaller in a spreadsheet?

// Resize a selected run of characters to a chosen point size in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);