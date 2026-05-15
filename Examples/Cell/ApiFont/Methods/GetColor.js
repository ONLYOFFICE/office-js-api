// Read the text color applied to a range of characters in a spreadsheet.

// How do I retrieve the exact color used to display certain characters in a cell in a spreadsheet?

// Copy the color from one group of characters and apply it to another group of characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
let color = Api.CreateColorFromRGB(255, 111, 61);
font.SetColor(color);
color = font.GetColor();
characters = range.GetCharacters(16, 6);
font = characters.GetFont();
font.SetColor(color);