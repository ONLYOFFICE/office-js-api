// Set the superscript property to the specified font in a spreadsheet.

// How to change a regular text to a superscript in a spreadsheet.

// Get a font object of characters and make it superscript in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSuperscript(true);