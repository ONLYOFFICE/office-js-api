// Read whether a specific range of characters is formatted as italic in a spreadsheet.

// How do I check if certain characters in a cell are currently displayed in italic in a spreadsheet?

// Inspect the italic setting of a character range and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);
let isItalic = font.GetItalic();
worksheet.GetRange("B3").SetValue("Italic property: " + isItalic);