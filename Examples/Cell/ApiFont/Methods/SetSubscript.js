// This example sets the subscript property to the specified font.

// How to change a regular text to a subscript.

// Get a font object of characters and make it subscript.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSubscript(true);
