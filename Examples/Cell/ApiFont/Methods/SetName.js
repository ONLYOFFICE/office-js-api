// Change the typeface used for specific text characters in a spreadsheet.

// How do I assign a different font family to part of the text in a spreadsheet?

// Switch selected characters to a named typeface and confirm the change in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);