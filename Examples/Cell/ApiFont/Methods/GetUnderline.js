// Retrieve the underline style applied to a text character in a spreadsheet.

// How do I find out which underline style is used on a piece of text in a spreadsheet?

// Read the underline setting from a character's font and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
let underlineType = font.GetUnderline();
worksheet.GetRange("B3").SetValue("Underline property: " + underlineType);