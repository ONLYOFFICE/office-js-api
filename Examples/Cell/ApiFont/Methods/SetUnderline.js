// Set an underline of the type specified in the request to the font in a spreadsheet.

// How to change a regular text to an underlined one in a spreadsheet.

// Get a font object of characters and make it underlined in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");