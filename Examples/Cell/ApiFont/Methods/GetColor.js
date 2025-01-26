// This example shows how to get the font color property of the specified font.
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