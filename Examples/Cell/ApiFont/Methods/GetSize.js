// This example shows how to get the font size property of the specified font.

// How to determine a font size of characters.

// Get the size of a font and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
let size = font.GetSize();
worksheet.GetRange("B3").SetValue("Size property: " + size);