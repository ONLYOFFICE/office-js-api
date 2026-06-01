// Draw a horizontal line through selected text characters in a spreadsheet.

// How do I add a strikethrough effect to part of the text in a spreadsheet?

// Mark a run of characters as crossed out to indicate deleted content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);