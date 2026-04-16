// Get the italic property of the specified font in a spreadsheet.

// How to know whether a font style of characters is italic in a spreadsheet.

// Get a boolean value that represents whether a font is italic or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);
let isItalic = font.GetItalic();
worksheet.GetRange("B3").SetValue("Italic property: " + isItalic);