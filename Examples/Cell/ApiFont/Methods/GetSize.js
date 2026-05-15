// Read the font size applied to a range of characters in a spreadsheet.

// How do I find out the point size of the text used for specific characters in a cell in a spreadsheet?

// Set a font size on a group of characters, then retrieve and display that size in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
let size = font.GetSize();
worksheet.GetRange("B3").SetValue("Size property: " + size);