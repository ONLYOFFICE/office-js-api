// Extract the text string from a selected range of characters within a cell in a spreadsheet.

// How do I read the actual text that a character selection represents in a spreadsheet?

// Pull out a substring from a cell by selecting characters at a given position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let caption = characters.GetCaption();
worksheet.GetRange("B3").SetValue("Caption: " + caption);