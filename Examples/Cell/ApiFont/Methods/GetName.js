// Read the typeface name applied to a range of characters in a spreadsheet.

// How do I find out which font family is used for specific characters in a cell in a spreadsheet?

// Set a typeface on a group of characters, then retrieve and display its name in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);